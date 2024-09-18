import { useState } from "react";
import axiosInstance from "../../Api/axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/Jwt";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispath = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/admin/login", {
        email: email,
        password: password,
      });
      const Jwt = response.data.token;
      dispath(setToken(Jwt));
      navigate('/admin/billings')
    } catch (error) {
      setErrorMessage(error.response.data.message || "An error occurred.");
    }
  };
  return (
    <div className="flex justify-center items-center my-10 mx-2">
    <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-center text-2xl font-bold mb-6 text-white">
        Admin Login
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-700 rounded-md bg-gray-700 text-white shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-700 rounded-md bg-gray-700 text-white shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 text-xs mt-1 text-center">
            {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login