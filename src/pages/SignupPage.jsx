import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../axios/axiosInstance";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    let newUser = { username, email, password };

    let res = await api.post("/users", newUser);
    // console.log(res);

    if (res.status === 201) {
      alert("Signup Success 🚀");
      navigate("/");
    } else {
      alert("Signup Failed ❌");
    }
  };

  return (
    <div className="bg-white w-full h-screen flex justify-center ">
      <section className="p-5 mt-20">
        <h1 className="text-xl font-bold text-center">Sign up</h1>

        <form className="flex flex-col gap-5 p-4" onSubmit={handleSignup}>
          <input
            className="p-2 outline-0 border border-gray-200"
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
            Sign up
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignupPage;
