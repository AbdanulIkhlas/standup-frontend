import React from "react";

const InputForm = ({
  value,
  type,
  name,
  id,
  placeholder,
  customClass,
  pathIcon,
}) => {
  return (
    <div className="flex gap-2 items-center mb-4 border-b border-white transition duration-300 focus-within:border-red-400">
      <img
        src={pathIcon}
        alt="Icon"
        className="w-5 text-white fill-white pb-3"
      />
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        className={`${customClass} w-[250px] bg-transparent focus:outline-none`}
        required
      />
    </div>
  );
};

export default InputForm;
