import React, { useEffect, useState } from "react";

import Button from "../components/Button";
import { saveAs } from "file-saver";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { useNavigate } from "react-router-dom";

function Congratulation() {
  const [countdown, setCountdown] = useState(60); // 5 seconds countdown
  const navigate = useNavigate();

  useEffect(() => {
    // if (countdown === 0) {
    //   navigate("/"); // Redirect to home page
    // }

    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000); // Decrement every 1 second

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [countdown, navigate]);
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

  const convertToBlob = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return blob;
  };

  const shareImage = async (imageUrl) => {
    try {
      const blob = await convertToBlob(imageUrl);
      const file = new File([blob], "image.jpg", { type: blob.type });

      if (navigator.share) {
        await navigator.share({
          title: "Check out this image",
          files: [file],
        });
      } else {
        alert("Your browser does not support the Web Share API");
      }
    } catch (error) {
      console.error("Error sharing image:", error);
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

            <button
              className="hover:cursor-pointer p-3 border rounded-full bg-black text-white"
              onClick={() => shareImage(certificateUrl)}
            >
              Share on Social Media
            </button>

            {/* <div className=" flex gap-4">
              <WhatsappShareButton
                url={certificateUrl}
                title={"View my certificate, Pledge and Share now :: "}
              >
                <img
                  src="./assets/images/WhatsApp.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={certificateUrl}
                title={"View my certificate, Pledge and Share now :: "}
              >
                <img
                  src="./assets/images/LinkedIn.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </LinkedinShareButton>
              <FacebookShareButton
                url={certificateUrl}
                title={"View my certificate, Pledge and Share now :: "}
              >
                <img
                  src="./assets/images/Facebook.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </FacebookShareButton>
              <TwitterShareButton
                url={certificateUrl}
                title={"View my certificate, Pledge and Share now :: "}
              >
                <img
                  src="./assets/images/TwitterX.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </TwitterShareButton>
            </div> */}
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
