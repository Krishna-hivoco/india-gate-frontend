const Footer = () => {
  const openDocFile = (path) => {
    // Replace with your actual file URL
    // const fileUrl =
    //   "/Draft - Terms and Conditions - Freedom From Hunger Campaign - August 2024.docx";
    window.open(`${window.location.origin}/${path}`, "_blank"); // Opens the file in a new tab
  };
  const shareSocialMediaURL = (path) => {
    window.open(`${path}`, "_blank"); // Opens the file in a new tab
  };
  return (
    <div className="container hidden md:block">
      <div className=" absolute bottom-0 left-0 w-full bg-[#682E21] bg-opacity-60 h-[75px] items-center justify-between px-20 hidden md:flex">
        <div className="flex justify-between text-white gap-[50px] hover:cursor-pointer">
          <span
            onClick={() => openDocFile("about-us")}
            className="font-Inter text-[16px] font-normal"
          >
            About Us
          </span>
          <span onClick={() => openDocFile("privacy-policy")}>
            Privacy Policy
          </span>
          <span onClick={() => openDocFile("terms-and-conditions")}>
            Terms and Conditions
          </span>
        </div>
        <div className="flex justify-between gap-[20px]">
          <img
            onClick={() =>
              shareSocialMediaURL("https://www.youtube.com/c/IndiaGateFoods")
            }
            src="./assets/images/icon-one.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            onClick={() =>
              shareSocialMediaURL("https://x.com/IndiaGateFoods?mx=2")
            }
            src="./assets/images/TwitterX.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            onClick={() =>
              shareSocialMediaURL(
                "https://www.linkedin.com/company/krbl-limited"
              )
            }
            src="./assets/images/LinkedIn.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            onClick={() =>
              shareSocialMediaURL(" https://www.facebook.com/indiagatefoods")
            }
            src="./assets/images/Facebook.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <img
            onClick={() =>
              shareSocialMediaURL(
                "https://www.instagram.com/indiagatefoods/?hl=en"
              )
            }
            src="./assets/images/Instagram.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
