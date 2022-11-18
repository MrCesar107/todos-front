import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login(props) {
  const [authMode, setAuthMode] = useState("login");
  const onSubmit = (data) => {
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "login" ? "register" : "login");
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  if(authMode === "login") {
    return (
      <div className="background-yellow">
        <div className="flex justify-center items-center w-full h-full">
          <div className="max-w-2xl w-full h-auto p-4 bg-gray-200">
            <h1 className="text-3xl text-center py-4">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center">
                <span className="text-blue-500 hover:underline cursor-pointer" onClick={changeAuthMode}>Sign Up</span>
              </div>
              <div className="my-3">
                <label className="block mb-2">Email</label>
                <input {...register("email", { required: true })} className="w-full p-2 border border-gray-400" placeholder="email@example.com" type="email" />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="my-3">
                <label className="block mb-2">Password</label>
                <input {...register("password", { required: true })} className="w-full p-2 border border-gray-400" type="password" placeholder="Your password" />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="my-3 flex justify-end">
                <input className="w-full max-w-xs p-2 bg-blue-500 text-white cursor-pointer" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="background-yellow">
        <div className="flex justify-center items-center w-full h-full">
          <div className="max-w-2xl w-full h-auto p-4 bg-gray-200">
            <h1 className="text-3xl text-center py-4">Sign Up</h1>
            <div className="text-center">
              <span className="text-blue-500 hover:underline cursor-pointer" onClick={changeAuthMode}>Login</span>
            </div>
            <div className="my-3">
              <label className="block mb-2">Email</label>
              <input className="w-full p-2 border border-gray-400" placeholder="email@example.com" type="email" />
            </div>
            <div className="my-3">
              <label className="block mb-2">Password</label>
              <input className="w-full p-2 border border-gray-400" type="password" placeholder="Your password" />
            </div>
            <div className="my-3">
              <label className="block mb-2">Confirm Password</label>
              <input className="w-full p-2 border border-gray-400" type="password" placeholder="Re-enter your password" />
            </div>
            <div className="my-3 flex justify-end">
              <input className="w-full max-w-xs p-2 bg-blue-500 text-white cursor-pointer" type="submit" value="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
