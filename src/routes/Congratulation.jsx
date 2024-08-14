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
import Share from "../components/Share";

function Congratulation() {
  const [countdown, setCountdown] = useState(60); // 5 seconds countdown
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate("/"); // Redirect to home page
    }

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
          title: "View my certificate, Pledge and Share now",
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
      <div className="flex flex-col md:flex-row justify-between px-6  md:p-[52px] h-auto md:h-full md:pt-20 md:pb-40 ">
        <div className="flex flex-col justify-center md:justify-start items-center   w-full md:w-[344px]   left-0 md:left-20 gap-1 top-40 px- md:px-0 ">
          <img
            className="w-[160px] h-[200px] hidden md:flex"
            src="./assets/images/logo-2.png"
            alt=""
          />

          <div className="[text-shadow:_3.56px_3.56px_0_#682E22]   flex justify-center items-center text-[#F5F5F5] font-bold text-[41px] leading-[53px] md:text-[55px] md:leading-[72px] font-Antonio">
            <h1 className="relative inline-block text-shadow-custom">
              CONGRATULATIONS!{" "}
            </h1>
          </div>

          <p className="text-[14px] leading-[22px] md:text-2xl text-white text-center font-bold font-OpenSans">
            You’ve taken a powerful step. We are creating a future where no
            child is left hungry. Stay connected, this is just the beginning.
          </p>

          {/* <div className=" flex justify-center"></div> */}
        </div>

        <div className=" flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px] pb- md:pb-0   left-0 md:left-20 gap-9 top-40 px- md:px-0">
          <div className="pt-2 flex flex-col gap-7 text-center text-white items-center">
            <img
              className={`${
                certificateUrl
                  ? "border w-52 md:w-96 md:h-auto"
                  : "w-auto h-auto"
              } md:p-0`}
              src={`${certificateUrl}`}
              alt="certificate image"
            />

            <div className="flex flex-1 absolute px-6 left-0  bottom-3 w-full gap-[6px] md:hidden ">
              <Button
                onClick={() =>
                  downloadImage(
                    sessionStorage.getItem("user_url"),
                    sessionStorage.getItem("user_filename")
                  )
                }
                text={`download`}
                className={` md:flex`}
              />

              <button
                style={{ backgroundColor: "rgba(245, 245, 245, 0.12) " }}
                className=" w-full hover:cursor-pointer p-3  rounded-full   font-semibold text-2xl shadow-md  shadow-white font-Antonio uppercase  text-white border-2 "
                onClick={() => shareImage(certificateUrl)}
              >
                Share
              </button>
            </div>

            <div className="hidden md:flex gap-2 w-full">
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
                style={{ backgroundColor: "rgba(245, 245, 245, 0.12) " }}
                className="hidden md:block hover:cursor-pointer p-3  rounded-full  w-full font-semibold text-2xl shadow-md  shadow-white font-Antonio uppercase  text-white border-2 h-16"
                onClick={() => shareImage(certificateUrl)}
              >
                Share
              </button>

              {/* <WhatsappShareButton
                url={`${window.location.origin}/share?url=${encodeURIComponent(
                  certificateUrl
                )}`}
                // title={"View my certificate, Pledge and Share now :: "}
              >
                <img
                  src="./assets/images/WhatsApp.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </WhatsappShareButton> */}

            </div>

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

      {/* <Button
        onClick={() =>
          downloadImage(
            sessionStorage.getItem("user_url"),
            sessionStorage.getItem("user_filename")
          )
        }
        text={`download`}
        className={`!w-[80%] !mx-auto absolute bottom-0 left-0 right-0 flex justify-center mb-6 md:hidden `}
      /> */}
    </>
  );
}

export default Congratulation;
