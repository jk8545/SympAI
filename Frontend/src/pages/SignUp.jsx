import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, password } = formData;
    if (!firstName || !lastName || !password) {
      return;
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("signup error :", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all hover:scale-105 duration-300"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create an Account</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 transition duration-300"
          required
        />
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6 transition duration-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-lg shadow-md focus:outline-none transform transition-all hover:scale-105 duration-300"
        >
          Continue
        </button>
        <div className="text-center my-4 text-gray-600">or</div>
        <button
          type="button"
          className="w-full flex justify-center items-center border-2 border-gray-300 py-3 rounded-lg mb-4 transition duration-300 hover:bg-gray-100"
        >
          Continue with Google
        </button>
        <button
          type="button"
          className="w-full flex justify-center items-center border-2 border-gray-300 py-3 rounded-lg transition duration-300 hover:bg-gray-100"
        >
          Continue with Apple
        </button>
        <p className="text-center mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-800">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}
