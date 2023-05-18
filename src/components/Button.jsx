import React from "react";

const Button = ({ className, children }) => {
  return (
    <buttton className="cursor-pointer flex items-center justify-center rounded-full w-16 h-16 bg-woodsmoke text-white">
      {children}
    </buttton>
  );
};

export default Button;
