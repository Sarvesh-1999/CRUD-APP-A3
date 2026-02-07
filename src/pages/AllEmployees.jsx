import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  async function getAllEmployees() {
    let resp = await axios.get("http://localhost:8002/employees");
    console.log(resp);
    setEmployees(resp.data);
  }

  useEffect(() => {
    getAllEmployees();
  }, []);

  async function deleteEmployee(id) {
    try {
      if (confirm("Are you sure ?")) {
        let resp = await axios.delete(`http://localhost:8002/employees/${id}`);
        toast.success("Employee Deleted");
        getAllEmployees();
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to delete");
    }
  }

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">All Employees</h1>

      {employees.length === 0 ? (
        <p>No employees available</p>
      ) : (
        <table className=" mx-auto w-5xl mt-5">
          <thead>
            <tr className="">
              <th className="p-2 border border-gray-300">EMP ID</th>
              <th className="p-2 border border-gray-300">FIRSTNAME</th>
              <th className="p-2 border border-gray-300">LASTNAME</th>
              <th className="p-2 border border-gray-300">AGE</th>
              <th className="p-2 border border-gray-300">EMAIL</th>
              <th className="p-2 border border-gray-300">DESIGNATION</th>
              <th className="p-2 border border-gray-300">SALARY</th>
              <th className="p-2 border border-gray-300"></th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td className="p-2 border border-gray-300 text-center">
                    {emp.empid}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {emp.firstname}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {emp.lastname}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {emp.age}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {emp.email}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {emp.designation}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    {emp.salary}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    <Link to={`/edit-emp/${emp.id}`}>
                      <button className="px-4 py-0.5 rounded font-semibold bg-amber-300 mx-1">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteEmployee(emp.id)}
                      className="px-4 py-0.5 rounded font-semibold bg-red-500 mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllEmployees;
