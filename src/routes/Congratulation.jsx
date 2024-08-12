import React, { useState } from "react";
import CertificateSidebar from "../components/CertificateSidebar";
import Button from "../components/Button";
import Footer from "../components/Footer";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  InstapaperShareButton,
} from "react-share";

function Congratulation() {
  const [certificateUrl, setcertificateUrl] = useState(
    sessionStorage.getItem("user_url")
  );

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
    <>
      <div className="flex flex-col md:flex-row justify-between p-6 md:p-[52px] h-auto md:h-full md:pt-20 md:pb-40 ">
        <div className="flex flex-col justify-center md:justify-start items-center   w-full md:w-[344px]   left-0 md:left-20 gap-9 top-40 px-4 md:px-0 ">
          <img
            className="w-[160px] h-[200px] hidden md:flex"
            src="./assets/images/logo-2.png"
            alt=""
          />

          <div className="flex justify-center items-center text-[#F5F5F5] font-bold text-[52px] md:text-[70px] font-Antonio">
            <h1 className="relative inline-block text-shadow-custom">
              Thank You
            </h1>
          </div>
          <p className="text-[18px] md:text-[24px] text-white text-center font-bold font-OpenSans">
            You’ve taken a powerful step. We are creating a future where no
            child is left hungry. Stay connected, this is just the beginning.
          </p>
          <div className="flex justify-center"></div>
        </div>

        <div className="flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px] pb-20 md:pb-0   left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
          <div className="flex flex-col gap-6 text-center text-white items-center">
            <img
              className=" md:w-96 md:p-0"
              src={`${certificateUrl}`}
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
                  src="./assets/images/icon-two.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </WhatsappShareButton>
              <LinkedinShareButton url={certificateUrl} title={"Certificate"}>
                <img
                  src="./assets/images/icon-three.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </LinkedinShareButton>
              <FacebookShareButton url={certificateUrl} title={"Certificate"}>
                <img
                  src="./assets/images/icon-four.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </FacebookShareButton>
              <InstapaperShareButton>
                <img
                  src="./assets/images/icon-five.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </InstapaperShareButton>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={() =>
          downloadImage(
            sessionStorage.getItem("user_url"),
            sessionStorage.getItem("user_filename")
          )
        }
        text={`download`}
        className={`!w-[80%] !mx-auto absolute bottom-0 left-0 right-0 flex justify-center mb-6 md:hidden `}
      />
    </>
  );
}

export default Congratulation;
