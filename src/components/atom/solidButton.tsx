'use client';
import React from 'react';
import { toast } from "react-toastify";


interface SolidButtonProps {
  name: string;
}

const SolidButton: React.FC<SolidButtonProps> = ({ name }) => {
  const handleClick = () => {
    if (name === 'Share') {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          toast("Link copied on clipboard", {
            hideProgressBar: false,
            autoClose: 2000,
            type: "success",
            theme: "colored",
          });
        })
        .catch((error) => {
          toast("Failed to copy URL to clipboard", {
            hideProgressBar: false,
            autoClose: 2000,
            type: "error",
            theme: "colored",
          });
          console.error('Failed to copy URL to clipboard', error);
        });
    }
  };

  return (
    <div className="cursor-pointer">
      <button
        className="text-white bg-primary py-px px-2 rounded-lg font-semibold select-none hover:shadow-mds"
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default SolidButton;
