import { User } from "../models/user.models.js";
import { generateUniqueUserName } from "../utils/user.utils.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(
      "somthing went wrong while generating refresh and access token.",
      error
    );
  }
};

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if ([fullName, email, password].some((field) => field?.trim() === "")) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email is Already in use." });
    }

    const username = await generateUniqueUserName(fullName);

    const newUser = new User({
      fullName: fullName,
      username: username,
      email: email,
      password: password,
    });

    await newUser.save();

    if (!newUser) {
      return res.json({ message: "user not registered" });
    }

    return res.status(200).json({
      message: "User Registered Successfully!",
      user: {
        fullName: newUser.fullName,
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (error) {
    console.log("user registration FAILED!", error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { emailOrUserName, password } = req.body;

    if (!emailOrUserName)
      return res.status(400).json({ message: "Email/Username is required" });
    if (!password)
      return res.status(400).json({ message: "Password is required" });

    const user = await User.findOne({
      $or: [{ username: emailOrUserName }, { email: emailOrUserName }],
    });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist." });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid user credentials" });

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: false, //set to true in production with https
      sameSite: "lax",
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "User LoggedIn Successfully",
        accessToken,
        refreshToken,
        user: loggedInUser,
      });
  } catch (error) {
    console.log("Invalid credentials:", error);
  }
};

const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({ message: "User logged Out" });
};

const checkAuth = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(401).json({ message: "Unauthorized request." });
    return res.status(200).json({ message: "user is loggedIn", user });
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  generateAccessAndRefreshToken,
  checkAuth,
};
