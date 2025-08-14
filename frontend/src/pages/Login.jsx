import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";


function Login() {
  const navigate = useNavigate();
  const {login,loggedIn}=useContext(AuthContext);
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const data = {emailOrUserName,password};
    await login(data)
    setEmailOrUserName("");
    setPassword("");
    navigate("/");
  };

  if(loggedIn){
    return <Navigate to="/"/>
  }

  const inputStyles = "border w-[300px]";
  return (
    <div className="grid place-items-center pt-4">
      <div className="bg-white w-fit border border-violet-800 px-4 py-4 flex flex-col gap-4 rounded-2xl shadow-2xl">
        <h1 className="text-3xl text-violet-900 mb-2">Login Form</h1>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            className={inputStyles}
            placeholder="Enter Your Email or Username"
            value={emailOrUserName}
            onChange={(e) => {
              setEmailOrUserName(e.target.value);
            }}
          />
          <input
            type="text"
            className={inputStyles}
            placeholder="Enter Your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className="bg-violet-800 text-white cursor-pointer"
            onClick={loginUser}
          >
            Login
          </button>
        </form>
        <p className="text-blue-700">
          <Link to="/register">Don't have account?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
