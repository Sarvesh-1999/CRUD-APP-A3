import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <section className="mb-20">
        <h1 className="text-4xl font-extrabold text-center">User-Management</h1>
        <p className="text-center text-gray-800 font-semibold mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          consectetur?
        </p>

        <div className="flex justify-evenly mt-5">
          <Link className="px-10 py-2 bg-gray-200 font-semibold">Create User</Link>
          <Link className="px-10 py-2 bg-gray-200 font-semibold">All Users</Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
