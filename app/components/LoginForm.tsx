"use client";
import React, { useState } from "react";
// icons
import { IoMdArrowDropdown } from "react-icons/io";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
// definitions
// login form schema
import { LoginFormSchema } from "../lib/definitions";

// action
// login
import { login } from "../actions/auth";
// session
// get session
// import { getSession } from "../lib/session";

// interfaces
// errors interface
interface ErrorsInterface {
  username?: string[];
  password?: string[];
}

export default function LoginForm() {
  // states
  // is password hide
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  // username
  const [username, setUsername] = useState("");
  // password
  const [password, setPassword] = useState("");
  // errors
  const [errors, setErrors] = useState<ErrorsInterface>({});

  // handle form sumption
  const handleFormSubmit = async () => {
    const validatedForm = LoginFormSchema.safeParse({
      username,
      password,
    });
    if (!validatedForm.success) {
      setErrors(validatedForm.error.flatten().fieldErrors);
    } else {
      setErrors({});
      await login({ username, password });
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* form */}
      <div className="min-w-96 bg-white rounded-sm shadow-lg p-5">
        {/* header */}
        <header className="flex items-center justify-end mb-3 py-1.5">
          {/* language */}
          <div className="flex items-center gap-x-0.5 text-neutral-500 text-sm cursor-pointer">
            <span>English(US)</span>
            <IoMdArrowDropdown className="text-xl" />
          </div>
        </header>
        {/* title */}
        <h3 className="text-xl text-neutral-600 mb-7">Login</h3>
        {/* form inputs */}
        <div>
          {/* username */}
          <div className="mb-5">
            <div className="w-full p-1 border border-neutral-300 rounded-sm">
              <input
                className="w-full focus:outline-none focus:ring-0 border-none bg-transparent text-sm"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            {/* error */}
            {errors.username?.length && (
              <div className="my-1.5 text-sm text-red-600">
                {errors.username.map((item) => {
                  return <p key={item}>{item}</p>;
                })}
              </div>
            )}
          </div>
          {/* password */}
          <div className="mb-7">
            <div className="w-full p-1 border border-neutral-300 rounded-sm flex items-center gap-x-1.5">
              <input
                className="w-full focus:outline-none focus:ring-0 border-none bg-transparent text-sm"
                type={isPasswordHide ? "password" : "text"}
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                className="text-neutral-600 text-lg"
                onClick={() => {
                  setIsPasswordHide(!isPasswordHide);
                }}
              >
                {isPasswordHide ? <VscEyeClosed /> : <VscEye />}
              </button>
            </div>
            {/* error */}
            {errors.password?.length && (
              <div className="my-1.5 text-sm text-red-600">
                {errors.password.map((item) => {
                  return <p key={item}>{item}</p>;
                })}
              </div>
            )}
          </div>

          {/* button */}
          <button
            onClick={() => {
              handleFormSubmit();
            }}
            className="px-5 rounded-sm py-0.5 text-sm bg-emerald-600 text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
