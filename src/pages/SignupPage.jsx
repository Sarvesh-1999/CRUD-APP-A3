const SignupPage = () => {
  return (
    <div className="bg-white w-full h-screen flex justify-center ">
      <section className="p-5 mt-20">
        <h1 className="text-xl font-bold text-center">Sign up</h1>

        <form className="flex flex-col gap-5 p-4">
          <input
            className="p-2 outline-0 border border-gray-200"
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
          />
          <input
            className="p-2 outline-0 border border-gray-200"
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
          <input
            className="p-2 outline-0 border border-gray-200"
            type="text"
            name="password"
            id="password"
            placeholder="Enter Password"
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
