import React from 'react'

const SignIn = () => {
  return (
    <div className="bg-primary">
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Email
                    </label>
                    <input className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"></input>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2" >
                        Password
                    </label>
                    <input className="appearance-none bg-zinc-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"></input>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <a className="bg-secondary transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" href="/home">
                        Login
                    </a>
                    <p>Don't have an account? 
                      <a className="inline-block mt-5 ml-1 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/auth/signUp">
                        Sign Up
                      </a>
                    </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn
