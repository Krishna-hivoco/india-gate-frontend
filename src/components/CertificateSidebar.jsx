import { useState } from "react";
import Button from "./Button";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  InstapaperShareButton,
} from "react-share";

const CertificateSidebar = ({ certificateUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

  const toggleMenu = () => {
    console.log("object");
    setIsMenuOpen((prev) => !prev);
  };

  const downloadImage = async (imageUrl, fileName) => {
    try {
      const response = await fetch(imageUrl, {
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName || "downloaded-image.jpg";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <div className="flex flex-col mt-[37px]">
      <div className="flex justify-between px-6 h-full">
        <img
          className="h-[70px] w-[65px] flex md:hidden self-center"
          src="./assets/images/logo-2.png"
          alt=""
        />

        <img
          src="./assets/icons/menu-btn.png"
          className="h-[44px] w-[44px] flex md:hidden self-center"
          alt="Menu"
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="fixed top-15 right-3 mt-16 mr-4 bg-white shadow-lg rounded-xl w-[200px] p-4 z-50">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#link1" className="text-black text-lg">
                About us
              </a>
            </li>
            <div className="border-[1px] border-[#8E8E8E] rounded-lg"></div>
            <li>
              <a href="#link2" className="text-black text-lg">
                Privacy Policy
              </a>
            </li>
            <div className="border-[1px] border-[#8E8E8E] rounded-lg"></div>
            <li>
              <a href="#link2" className="text-black text-lg">
                T&C
              </a>
            </li>
          </ul>
        </div>
      )}
      <img
        src="./assets/images/logo-1.png"
        className="h-[98px] w-[94px] flex md:hidden self-center mt-auto"
        alt=""
      />
      <div className="flex justify-center items-center text-[#F5F5F5] text-[38px] sm:text-[45px] md:text-[55px] font-Antonio px-4 sm:px-6">
        <h1 className="relative inline-block text-shadow-custom text-center">
          #FreedomFromHunger
        </h1>
      </div>

      {/* Bottom div */}
      <div className="flex justify-center items-center flex-col w-full md:w-[33%] absolute md:right-1 bottom-28 md:bottom-0 md:top-[-46px]  gap-5">
        <img
          className=" md:w-96 md:p-0"
          src={`./assets/images/certificate.png`}
          alt="certificate image"
        />
        <Button
          onClick={() =>
            downloadImage(
              sessionStorage.getItem("user_url"),
              sessionStorage.getItem("user_filename")
            )
          }
          text={`download`}
          className={`hidden md:flex w-52`}
        />
        <div className=" flex gap-4">
          <img
            src="./assets/images/icon-one.png"
            className="w-7 h-7 hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
            alt=""
          />

          {/* <h2 className="font-OpenSans text-sm leading-[19px] md:text-base text-nowrap font-normal md:leading-[22px] text-center text-white">
            Share on Social Media
          </h2> */}
          <WhatsappShareButton url={certificateUrl} title={"Certificate"}>
            <img
              src="./assets/images/WhatsApp.png"
              className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
              alt=""
            />
          </WhatsappShareButton>
          <LinkedinShareButton url={certificateUrl} title={"Certificate"}>
            <img
              src="./assets/images/LinkedIn.png"
              className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
              alt=""
            />
          </LinkedinShareButton>
          <FacebookShareButton url={certificateUrl} title={"Certificate"}>
            <img
              src="./assets/images/Facebook.png"
              className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
              alt=""
            />
          </FacebookShareButton>
          <InstapaperShareButton>
            <img
              src="./assets/images/Instagram.png"
              className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
              alt=""
            />
          </InstapaperShareButton>
        </div>
      </div>
    </div>
  );
};

export default CertificateSidebar;
