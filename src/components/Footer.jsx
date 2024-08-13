const Footer = () => {
  const openDocFile = () => {
    // Replace with your actual file URL
    // const fileUrl =
    //   "/Draft - Terms and Conditions - Freedom From Hunger Campaign - August 2024.docx";
    window.open(`${window.location.origin}/terms-and-conditions`, "_blank"); // Opens the file in a new tab
  };
  return (
    <div className="container hidden md:block">
      <div className=" absolute bottom-0 left-0 w-full bg-[#682E21] bg-opacity-60 h-[75px] items-center justify-between px-20 hidden md:flex">
        <div className="flex justify-between text-white gap-[50px]">
          <span className="font-Inter text-[16px] font-normal">About Us</span>
          <span onClick={() => openDocFile()}>Privacy Policy</span>
          <span onClick={() => openDocFile()}>Terms and Conditions</span>
        </div>
        <div className="flex justify-between gap-[20px]">
          <img
            src="./assets/images/icon-one.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            src="./assets/images/icon-two.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            src="./assets/images/icon-three.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            src="./assets/images/icon-four.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            src="./assets/images/icon-five.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
