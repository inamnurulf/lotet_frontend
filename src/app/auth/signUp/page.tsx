"use client";
import React, { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    confirmPassword: "", 
  })  

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
        setLoading(true);
        const response = await axios.post('http://localhost:3030/user/signUp', user)
        console.log("Sign Up Success", response.data);
        router.push('/auth/login');

    } catch (error) {
        console.log("Sign Up Error", error);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.confirmPassword.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user.email, user.password, user.confirmPassword])

  return (
    <div className="bg-primary">
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-center text-2xl font-bold mb-4">
                  {loading ? "Loading..." : "Sign Up"}
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                    {/* for="email" */}
                        Email
                    </label>
                    <input className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}> 
                    </input>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2" >
                    {/* for="password" */}
                        Password
                    </label>
                    <input className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}>
                    </input>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2" >
                    {/* for="password" */}
                        Confirm password
                    </label>
                    <input className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="confirmPassword" 
                            type="password"
                            value={user.confirmPassword}
                            onChange={(e) => setUser({...user, confirmPassword: e.target.value})}>
                    </input>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <a className="bg-secondary transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="button" 
                        // href="/home"
                        onClick={onSignUp}>
                        {buttonDisabled ? "Disabled" : "Sign Up"}
                    </a>
                    <p>Already have an account?
                      <a className="inline-block mt-5 ml-1 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/auth/login">
                        Login
                      </a>
                    </p>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp
