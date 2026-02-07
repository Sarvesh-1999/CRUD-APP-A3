import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../axios/axiosInstance";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const navigate = useNavigate();

  async function getAllSignupUsers() {
    let resp = await api.get("/users");
    setAllUsers(resp.data);
  }

  useEffect(() => {
    getAllSignupUsers();
  }, []);

  function checkIsSignedUpUser() {
    let user = allUsers.find((user) => {
      return user.email === email && user.password === password;
    });

    return user;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    let authUser = checkIsSignedUpUser();

    if (authUser) {
      toast.success("Login Success 🚀");
      sessionStorage.setItem("accessToken", Math.random());
      navigate(`/dashboard/${authUser.id}`);
    } else {
      toast.error("Login Failed ❌");
    }
  };

  return (
    <div className="bg-white w-full h-screen flex justify-center ">
      <section className="p-5 mt-20">
        <h1 className="text-xl font-bold text-center">Login</h1>

        <form className="flex flex-col gap-5 p-4" onSubmit={handleLogin}>
          <input
            className="p-2 outline-0 border border-gray-200"
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 outline-0 border border-gray-200"
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-violet-600 p-2 rounded hover:bg-violet-700 text-white font-semibold">
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
