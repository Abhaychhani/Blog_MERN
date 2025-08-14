import { User } from "../models/user.models.js";

export const generateUniqueUserName = async (fullname) => {
  // convert fullname to lowercase and remove spaces, spacial chars
  const basename = fullname.toLowerCase().replace(/[^a-z0-9]/g, "");

  let username;
  let isUnique = false;
  // loop until we find a unique username
  while (!isUnique) {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let randomSuffix = "";
    for (let i = 0; i < 10; i++) {
      randomSuffix += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    username = basename + randomSuffix;

    const isUserNameExist = await User.findOne({ username });
    if (!isUserNameExist) {
      isUnique = true;
    }
  }
  return username;
};
