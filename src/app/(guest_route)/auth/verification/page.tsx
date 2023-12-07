"use client"
import React, { useState, FC, useRef, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";


// const maxCodeLength = 6;
interface Props { }

var currentOTPIndex: number = 0;
const Verification: FC<Props> = (props): JSX.Element => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const { email } = useAuth();
  const router = useRouter();


  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = ({ target, }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1)
    else setActiveOTPIndex(currentOTPIndex + 1);

    console.log(newOTP.join(''))
    setOtp(newOTP);
  };

  const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    currentOTPIndex = index;
    if (key === 'Backspace') setActiveOTPIndex(index - 1)
  }

  const handleSubmit = async () => {
    try {
      const token = otp.join('')
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "user/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            verifytoken: token
          }),
        }
      );
      if (response.ok) {
        router.push('/home')
      }
      else {
        const data = response.json();
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }

  }

  const handleResend = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "user/getNewToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email
          }),
        }
      );
      if (response.ok) {
        console.log(response.json())
      }
      else {
        const data = response.json();
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOTPIndex]);

  return (
    <div className="bg-primary backgroundsection">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-center text-2xl font-bold mb-4">
            Verification Code
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Enter the verification code sent to your email.
            </label>
            <div className="flex flex-row items-center justify-between">
              {otp.map((_, index) => {
                return (
                  <React.Fragment key={index}>
                    <input
                      ref={index === activeOTPIndex ? inputRef : null}
                      className="w-12 h-12 mb-1 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      onChange={handleOnChange}
                      onKeyDown={(e) => handleOnKeyDown(e, index)}
                      value={otp[index]}
                    />
                    {/* {index === otp.length - 1 ? null : (
                    <span className="w-2 py-0.5 bg-gray-400" />
                  )} */}
                  </React.Fragment>
                );
              })}
            </div>
            <div className="flex flex-col items-center justify-between">
              <p>
                Didn't get the code?
                <button
                  className="inline-block ml-1 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={handleResend}
                >
                  Resend
                </button>
              </p>
              <button
                className="bg-secondary  mt-5 transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )



  // const handleSubmit = (e: any) => {

  //   e.preventDefault();
  //   onSubmit

  // }
  // const [code, setCode] = useState<number[]>(Array(maxCodeLength).fill(-1));
  // const inpRefs = useRef(null);
  // const [activeInput, setActiveInput] = useState(-1);

  // return (
  //   <div className="bg-primary backgroundsection">
  //     <div className="flex justify-center items-center h-screen">
  //       <form className="bg-white rounded-lg shadow-lg p-8">
  //         <h2 className="text-center text-2xl font-bold mb-4">
  //           Verification Code
  //         </h2>
  //         <div className="mb-4">
  //           <label className="block text-gray-700 font-semibold mb-2">
  //             Enter the verification code sent to your email.
  //           </label>
  //           <div className="flex flex-row items-center justify-between">
  //             <input
  //               type="number"
  //               className="w-full h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  //               max="1"
  //             ></input>
  //             {/* <input
  //               type="text"
  //               className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  //               max="1"
  //             ></input>
  //             <input
  //               type="text"
  //               className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  //               max="1"
  //             ></input>
  //             <input
  //               type="text"
  //               className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  //               max="1"
  //             ></input>
  //             <input
  //               type="text"
  //               className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  //               max="1"
  //             ></input>
  //             <input
  //               type="text"
  //               className="w-12 h-12 ml-1 mr-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  //               max="1"
  //             ></input> */}
  //           </div>
  //         </div>
  //         <div className="flex flex-col items-center justify-between">
  //           <p>
  //             Didn't get the code?
  //             <a
  //               className="inline-block ml-1 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
  //               href="/[resend link here]"
  //             >
  //               Resend
  //             </a>
  //           </p>
  //           <button
  //             className="bg-secondary  mt-5 transform transition-transform hover:scale-105 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  //             type="submit"
  //             // onClick={handleSubmit}
  //           >
  //             Verify
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
};

export default Verification;
