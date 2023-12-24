"use client";
import auth from "./auth.module.css";
import React, { useCallback, useState } from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Inputs from "../components/Inputs";
const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [varient, setVarient] = useState("login");
  const toggleVariant = useCallback(() => {
    setVarient((currentVarient) =>
      currentVarient === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div
      className={`${auth.hero} relative h-full w-full bg-no-repeat bg-center bg-fixed bg-cover text-start left-0`}
    >
      <div className="bg-black/40 w-full h-full lg:bg-opacity-50">
        {/* <nav className="px-12 py-5">
          <Image src={logo} alt="logo" className="h-12" />
        </nav> */}
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 mt-2 lg:w-2/5 lg:max-w-md w-full rounded-md">
            <h2 className="text-white text-4xl mb-8 font-semibold text-center">
              {varient === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {varient === "register" && (
                <Inputs
                  label="Username"
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setName(e.target.value)}
                  id="username"
                  type="text"
                  value={name}
                />
              )}
              <Inputs
                label="Email"
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Inputs
                label="Password"
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {varient === "login" ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {varient === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {varient === "login" ? "Create an account" : "Login"}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
