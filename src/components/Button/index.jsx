import React from "react";


function Button({ children, variant, customStyle, ...props }) {

  let className;
  if (variant === "primary") {
    className =
      "text-base w-[141px] leading-normal h-[48px] inline-flex justify-center items-center rounded-[5px] bg-[#5964E0] text-white font-bold hover:bg-[#939BF4]" +
      (customStyle ? ` ${customStyle}` : "");
  } else if (variant === "secondary") {
    className =
      "text-base w-[141px] text-bold leading-normal h-[48px] inline-flex justify-center items-center rounded-[5px] bg-[#5964e01a] font-bold text-[#5964E0] hover:bg-[#5964e059]" +
      (customStyle ? ` ${customStyle}` : "");
  } else if (variant === "dark") {
    className =
      "text-base w-[141px] text-bold leading-normal h-[48px] inline-flex justify-center items-center rounded-[5px] bg-dark-gray font-bold text-white hover:bg-gray" +
      (customStyle ? ` ${customStyle}` : "");
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
