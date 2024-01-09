// Import necessary modules and components
"use client";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  ("use server");
  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Implement logic for form submission (e.g., API call, validation)

    await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status == 200) {
        toast.success("Kayıt oluşturdu");
        router.push("/");
        //   setIsSignIn(true);
      }
    });
    // Reset form after submission
    setFormData({
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-gray-100 rounded shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastname" className="block mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full p-2 border rounded"
            required
          />
        </div>
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
        <div className="mb-4">
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
        {/* Confirm Password */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default SignUp;
