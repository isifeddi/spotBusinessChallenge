import React from "react";

const Input = ({ value, setValue, className, ...rest }) => {
  return (
    <input
      className="appearance-none focus:outline-none rounded-[32px] py-[19px] px-7 flex-1 border border-woodsmoke/70"
      placeholder="Your Email"
    />
  );
};

export default Input;
