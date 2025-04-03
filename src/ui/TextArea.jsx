import React from "react";

function TextArea({ name }) {
  return (
    <div>
      <textarea
        className="border-1 border-black/30 w-full py-2 px-3 rounded-md focus-visible:border-blue-500 focus-within:border-1 mt-3"
        placeholder="Your message"
        rows="4"
        name={name}
        required
      ></textarea>
      <span></span>
    </div>
  );
}

export default TextArea;
