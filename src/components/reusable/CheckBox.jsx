const CheckBox = ({ label }) => {
  return (
    <div className="flex items-center">
      <input
        id={`#${label}`}
        name={label}
        type="checkbox"
        className="appearance-none rounded-full checked:bg-[#7e6e2a] border border-[#7e6e2a] h-3 w-3 cursor-pointer"
        value={label}
      />
      <label
        htmlFor={`#${label}`}
        className="ml-1 text-gray-950 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
