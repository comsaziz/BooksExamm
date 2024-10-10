import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUsers] = useState(null);

  const navigate = useNavigate();

  const validation = () => {
    if (!name) {
      setError("Name is required");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const response = await axios.get(
          "https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp"
        );
        if (response.data.length > 0) {
          const foundUser = response.data.find(
            (user) => user.name === name && user.password === password
          );
          if (foundUser) {
            setUsers(foundUser);
            navigate("/Home");
          } else {
            setError("Invalid name or password");
          }
        }
      } catch (error) {
        console.error("Error logging in:", error);
        setError("An error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[#47302f]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#352328] rounded-lg shdow-lg p-7"
      >
        <h2 className="font-bold text-2xl text-center mb-6 text-[#86786e]">Signin</h2>

        <div className="mb-4  ">
          <label className="block text-[#86786e]" htmlFor="">
            Name
          </label>
          <input
            className="w-full p-2 mt-1 border border-red-50 rounded"
            type="text"
            placeholder="Enter the Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4  ">
          <label className="block text-[#86786e]" htmlFor="">
            Password
          </label>
          <input
            className="w-full p-2 mt-1 border border-red-50 rounded"
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button className="w-full font-bold py-2 px-4 text-[#86786e] bg-[#efe3c8] ">
          Signin
        </button>

        <Link to={"/"}>
        <p className='text-sm text-blue-500 mt-2'>You dont have Account?</p>
        </Link>
      </form>
    </div>
  );
}

export default Signin;
