"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import PasswordMatch from "@/components/passwordMatch";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUp = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    nim: "",
    username: ""
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [samePassword, setSamePassword] = React.useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  },[]);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "user/signUp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            name: user.username,
            nim: user.nim,
            password: user.password
          }),
        }
        );

        const data = await response.json();
        console.log(data)

        if( data?.needVerify==true) {
          login(data)
          router.push('/auth/verification') 
        }
        else {
          console.log(data)
        }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeEmail = (e: any) => {
    setUser({ ...user, email: e.target.value })
  };

  const handleChangePassword = (e: any) => {
    setUser({ ...user, password: e.target.value })
  };

  const handleChangeUsername = (e: any) => {
    setUser({ ...user, username: e.target.value })
  };

  const handleChangeNim = (e: any) => {
    setUser({ ...user, nim: e.target.value })
  };

  const handleChangeConfirmPassword = (e: any) => {
    setUser({ ...user, confirmPassword: e.target.value });
  };

  const passwordCheck = () => {
    if (user.password === user.confirmPassword) {
      setSamePassword(true);
      onSignUp();
    }
    else {
      setSamePassword(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.confirmPassword.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user.email, user.password, user.confirmPassword]);

  return (
    <section className="backgroundsection">
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
          <h2 className="text-center text-2xl font-bold mb-4">
            {loading ? "Loading..." : "Sign Up"}
          </h2>
          <div className="mb-4">
            {samePassword ? <p></p> : <PasswordMatch message='Both passwords are not identical!' />}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              {/* for="email" */}
              Email
            </label>
            <input
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={user.email}
              onChange={handleChangeEmail}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              {/* for="email" */}
              Full Name
            </label>
            <input
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={user.username}
              onChange={handleChangeUsername}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              {/* for="email" */}
              NIM
            </label>
            <input
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nim"
              value={user.nim}
              onChange={handleChangeNim}
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              {/* for="password" */}
              Password
            </label>
            <input
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={user.password}
              onChange={handleChangePassword}
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              {/* for="password" */}
              Confirm password
            </label>
            <input
              value={user.confirmPassword}
              onChange={handleChangeConfirmPassword}
              className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
            ></input>
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              disabled={buttonDisabled}
              className={buttonDisabled ?
                "bg-gray-200 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :
                "bg-secondary transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}
              type="button"
              onClick={passwordCheck}
            >
              Sign Up
            </button>
            <p>
              Already have an account?
              <a
                className="inline-block mt-5 ml-1 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/auth/login"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;

