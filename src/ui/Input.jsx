import React from "react";

function Input({
  type = "text",
  pattern,
  placeholder,
  defaultValue,
  inputMode,
  name,
}) {
  return (
    <div className="mt-3">
      <input
        type={type}
        name={name}
        className="border-1 border-black/30 w-full py-2 px-3 rounded-md focus-visible:border-blue-500 focus-within:border-1 bg-white"
        placeholder={placeholder}
        pattern={pattern}
        defaultValue={defaultValue}
        inputMode={inputMode}
        required
      />
      <span></span>
    </div>
  );
}

export default Input;
