function Button({ type = "button", label, className, onClick }) {
  return (
    <div className="">
      <button
        type={type}
        className={className}
        onClick={(e) => {
          onClick(e);
        }}
      >
        {label}
      </button>
    </div>
  );
}
export default Button;
