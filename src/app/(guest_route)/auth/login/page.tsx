"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import PasswordMatch from "@/components/passwordMatch";

const SignIn = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [passwordCheck, setPasswordCheck] = React.useState(true);

  const router = useRouter();

  const handleChangeEmail = (e:any) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e:any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user/signIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        setPasswordCheck(true);
        const data = await response.json();
        login(data);
        router.push("/dashboard");
      } else {
        setPasswordCheck(false);
        const errorData = await response.json();
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    // if (email != password) {
    //   setPasswordCheck(false);
    // }
  };

  useEffect(() => {
    if (
      email.length > 0 &&
      password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password]);

  return (
    <section className="bg-primary backgroundsection">
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            {passwordCheck ? <p></p>:<PasswordMatch message="Wrong email or password!" />}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              onChange={handleChangeEmail}
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              onChange={handleChangePassword}
            ></input>
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              className= {buttonDisabled ? 
                "bg-[#cbd5e1] font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :
                "bg-secondary transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}
              disabled = {buttonDisabled}
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
            <p>
              Don't have an account?
              <a
                className="inline-block mt-5 ml-1 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/auth/signUp"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
