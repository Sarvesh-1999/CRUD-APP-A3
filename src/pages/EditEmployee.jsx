import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    empid: "",
    age: "",
    salary: "",
    designation: "",
  });

  const params = useParams();

  async function getEditEmployee() {
    try {
      let resp = await axios.get(
        `http://localhost:8002/employees/${params.id}`,
      );
      console.log(resp);
      setFormData(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEditEmployee();
  }, []);

  const navigate = useNavigate()

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     let resp = await axios.put(`http://localhost:8002/employees/${params.id}`, formData);
     toast.success("Employee Updated")
     navigate("/all-emp")
    } catch (error) {
      console.log(error);
      toast.error("Unable to update");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center">Edit Employee</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-start py-5 w-xl mx-auto"
      >
        <input
          className="border px-2 py-1 rounded w-xl border-gray-300"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="FirstName"
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          className="border px-2 py-1 rounded w-xl border-gray-300"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="LastName"
          value={formData.lastname}
          onChange={handleChange}
        />
        <input
          className="border px-2 py-1 rounded w-xl border-gray-300"
          type="text"
          name="empid"
          id="empid"
          placeholder="Emp ID"
          value={formData.empid}
          onChange={handleChange}
        />
        <input
          className="border px-2 py-1 rounded w-xl border-gray-300"
          type="text"
          name="age"
          id="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          className="border px-2 py-1 rounded w-xl border-gray-300"
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="border px-2 py-1 rounded w-xl border-gray-300"
          type="text"
          name="salary"
          id="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />
        <input
          className="border px-2 py-1 rounded w-xl border-gray-300"
          type="text"
          name="designation"
          id="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <button className="bg-violet-600 text-white px-5 py-1 rounded font-semibold mx-auto">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
