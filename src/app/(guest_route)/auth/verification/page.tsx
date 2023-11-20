import React from "react";

const Verification = () => {
  return (
    <div className="bg-primary backgroundsection">
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-center text-2xl font-bold mb-4">
            Verification Code
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Enter the verification code sent to your email.
            </label>
            <div className="flex flex-row items-center justify-between">
              <input
                type="text"
                className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                max="1"
              ></input>
              <input
                type="text"
                className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                max="1"
              ></input>
              <input
                type="text"
                className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                max="1"
              ></input>
              <input
                type="text"
                className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                max="1"
              ></input>
              <input
                type="text"
                className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                max="1"
              ></input>
              <input
                type="text"
                className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                max="1"
              ></input>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <p>
              Didn't get the code?
              <a
                className="inline-block ml-1 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/[resend link here]"
              >
                Resend
              </a>
            </p>
            <a
              className="bg-secondary  mt-5 transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              href="/[verify link here]"
            >
              Verify
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verification;
