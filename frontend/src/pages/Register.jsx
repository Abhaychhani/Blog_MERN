import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const {loggedIn} = useContext(AuthContext);
  const inputStyles = "border w-[300px]";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password || !fullName) {
        console.log("please enter fullname, email or password");
        return;
      }
      
      const response = await axios.post(`${import.meta.env.VITE_ORIGIN}/user/register`, {
        fullName:fullName,
        email: email,
        password: password,
      });

      console.log("form submitted!", response);
    } catch (error) {
      console.log("Error while registration", error);
    } finally {
      setEmail("");
      setPassword("");
      setFullName("")
    }
  };

  if(loggedIn){
    return <Navigate to="/" />
  }

  return (
    <div className="grid place-items-center pt-4">
      <div className="bg-white w-fit border border-violet-800 px-4 py-4 flex flex-col gap-4 rounded-2xl shadow-2xl">
        <h1 className="text-3xl text-violet-900 mb-2">Register Form</h1>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            className={inputStyles}
            placeholder="Enter Your FullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            type="text"
            className={inputStyles}
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            className={inputStyles}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="bg-violet-800 text-white cursor-pointer"
            onClick={registerUser}
          >
            Register{" "}
          </button>
        </form>
        <p className="text-blue-700">
          <Link to="/login">Already have account?</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
