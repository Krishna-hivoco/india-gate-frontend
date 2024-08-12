/* eslint-disable react/prop-types */
const Button = ({
    text,
    onClick,
    bold = false,
    small = false,
    white = false,
    shadow = false,
    type = 'button',
    disabled = false,
    smallText = false,
    className
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`px-auto flex w-full items-center justify-center
          whitespace-nowrap text-white disabled:bg-true-gray-200 border-2 border-white  rounded-full font-Antonio uppercase shadow-md shadow-white  ${
            bold ? 'font-semibold' : 'font-bold'
          } ${shadow && 'shadow-md'} ${smallText ? 'text-sm' : 'text-2xl'} ${
          small ? 'h-8' : 'h-16'
        } ${
          white
            ? 'border border-true-gray-200 bg-white hover:border-true-gray-200'
            : 'border-0 bg-custom-gradient '
        } ${className}`  }
  
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  