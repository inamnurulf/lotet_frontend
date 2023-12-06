import React from "react";

const PasswordMatch = ( {message = []}: any) => {
    return (
        <div className="flex flex-col items-center bg-red-100 border border-red-500 py-2 px-3 leading-tight">
            <p className="text-sm">
                {message}
            </p>
        </div>
    );
}

export default PasswordMatch;
// w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 