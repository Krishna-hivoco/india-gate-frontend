/* eslint-disable react/prop-types */
import "../index.css"; // Import the custom CSS file
const InputField = ({ text, icon, className, onChange, type, ...rest }) => {
  return (
    <div className="flex items-center h-[56px] w-full bg-[#ECDEDB] border-[3px] gap-3 border-[#682E21] rounded-[4px] p-3">
      <img
        src={icon}
        alt=""
        className={`w-[18px] h-[18px] ml-2  ${className}`}
      />
      <input
        type={type || "text"}
        placeholder={text}
        onChange={onChange}
        className={`flex-1 bg-transparent border-none px-2 py-1 rounded-[px] placeholder-custom text-[#682E21] placeholder-custom  outline-none text-[16px] font-normal font-Inter`}
        {...rest}
      />
    </div>
  );
};

export default InputField;
