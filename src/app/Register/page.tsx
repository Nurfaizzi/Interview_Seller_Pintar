"use client";

import { useRouter } from "next/router";
import { Eye, EyeOff } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { Form, useForm, FormState } from "react-hook-form";
import axios from "axios";

type FormValue = {
  username: string;
  password: string;
  roleadmin: string;
};
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isView, setIsView] = useState(false);
  const [selectedRol, setSelectedRole] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    reset,
    resetField,
    formState: { errors, isSubmitted },
  } = useForm<FormValue>();

  const handleResetUsername = () => {
    setUsername("");
  };

  const handleResetPassword = () => {
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    if (username === "" || password === "" || selectedRol === "") {
      setError(true);
      setSuccess(false);
    }
    try {
      const response = await axios.post("http://localhost:8000/register", {
        username,
        password,
        selectedRol,
      });
      setSuccess(true);
      setError(false);
     
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {});

  return (
    <div className="flex flex-col min-h-full justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex mt-10 mx-auto gap-2 justify-center">
        <img
          className="h-10 w-auto"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Logoipsum
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            {success ? (
              <h1 className="text-white text-center justify-center bg-blue-500">
                Login Succes
              </h1>
            ) : null}
            <label className="block text-sm/6 font-medium text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                aria-invalid={errors.username ? "true" : "false"}
                onClick={handleResetUsername}
                {...register("username", {
                  required: "Please Enter Your Username",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters long",
                  },
                })}
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {error ? (
                <h1 className="text-red-700">Please Enter Your Username!</h1>
              ) : null}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2 relative">
              <input
                onClick={handleResetPassword}
                {...register("password", {
                  required: "Please Enter Your Password",
                  minLength: {
                    value: 7,
                    message: "Username must be at least 3 characters long",
                  },
                })}
                type={isView ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <button
                type="button"
                onClick={() => setIsView(!isView)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" 
              >
                {isView ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {error ? (
              <h1 className="text-red-700">Please Enter Your Password!</h1>
            ) : null}
          </div>
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">
              Role
            </label>
            <div className="mt-2">
              <select
                {...register("roleadmin", {
                  required: "Please Enter Your Role",
                  minLength: {
                    value: 1,
                    message: "Please Enter Your Role",
                  },
                })}
                value={selectedRol}
                onChange={(e) => setSelectedRole(e.target.value)}
                id="myDropdown"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              {error ? (
                <h1 className="text-red-700">Please Enter Your Username!</h1>
              ) : null}
            </div>
          </div>
          <div>
            <button
              onClick={() => reset()}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500 justify-center gap-2 flex ">
          Don't have an account ?
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
