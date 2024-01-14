// Import necessary modules and components
"use client";
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/user/userSlice";

const Login = () => {
  // Assuming you're using React and Redux, you can get access to the dispatch function like this:
  const dispatch = useDispatch();
  const router = useRouter();
  // State to manage form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const userData = await response.json();
        // Dispatch an action to update the user state in Redux
        dispatch(setUser(userData)); // Replace with your actual action and payload

        toast.success("Successfully logged in");
        new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
          router.push("/");
        });
      } else {
        toast.error("Failed to log in");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("An error occurred while logging in");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-gray-100 rounded shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
