import React from "react";

export const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  className = "",
  textColor = "text-white",
  ...props
}) => {
  return <button
    className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}  {...props}
  >{children}</button>;
};
