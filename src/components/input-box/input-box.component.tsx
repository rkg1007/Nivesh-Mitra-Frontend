"use client";

import { useState } from "react";

interface InputBoxProps {
  type: string;
  name?: string;
  placeholder?: string;
  icon?: string;
}

export const InputBoxComponent = ({ type, icon, ...inputBoxProps }: InputBoxProps) => {
  const [passwordVisibility, setPasswordVisility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisility((prevPasswordVisibility) => !prevPasswordVisibility);
  };

  return (
    <div className="relative w-[100%] mb-4">
      <input
        type={type == "password" && passwordVisibility ? "text" : type}
        className="input-box"
        {...inputBoxProps}
      />
      {icon ? (
        <span className="material-symbols-outlined input-icon">{icon}</span>
      ) : (
        <></>
      )}
      {type == "password" ? (
        <span
          className="material-symbols-outlined input-icon left-auto right-4 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {passwordVisibility ? "visibility" : "visibility_off"}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};
