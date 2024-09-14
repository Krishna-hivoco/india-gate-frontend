import React, { useState } from "react";
import YouTube from "react-youtube";
import SliderPopup from "../components/SliderPopup";
import Footer from "../components/Footer";

function Finish() {
  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const opts1 = {
    height: "250",
    width: "639",
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const openDocFile = (path) => {
    setIsMenuOpen(false);

    window.open(`${window.location.origin}/${path}`, "_blank"); // Opens the file in a new tab
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsMenuOpen(false);
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div
      className={` relative h-svh  bg-custom-mobile-bg md:bg-custom-blur-bg bg-cover bg-center`}
    >
      <div className="flex flex-col h-full md:hidden">
        <div className="flex-1 ">
          <div>
            <div className="flex justify-between p-5 pb-0">
              <img
                className="h-[70px] w-[65px] flex md:hidden r"
                src="./assets/images/logo-2.png"
                alt=""
              />

              <img
                src="./assets/icons/menu-btn.png"
                className="h-[44px] w-[44px] flex md:hidden "
                alt="Menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen((prev) => !prev);
                }}
              />
            </div>
          </div>

          <div className="flex justify-center flex-col px-5 ">
            <img
              src="./assets/images/logo-1.png"
              className="h-[98px]  max-w-full   self-center  "
              alt=""
            />

            <h2 className="mb-3 font-Antonio  text-[42px] font-bold leading-[54px] tracking-wide text-center text-white [text-shadow:_4.75px_4.75px_0px_#682E22]">
              Thank You, India.
            </h2>

            <p className="  font-OpenSans text-[15px] leading-5 tracking-wide  font-semibold text-center text-white [text-shadow:_0px_4px_4px_#00000040]">
              Your support helped us in providing over <br />
              <span className=" font-OpenSans  text-[20px]">1.5 lakh</span>{" "}
              meals to children in need. <br /> We shall continue this journey
              to spread
              <br />
              hope, joy and build a brighter tomorrow.
            </p>
          </div>
        </div>

        <div className="text-white mb-24 px-6 ">
          <YouTube
            className="shadow-2xl"
            videoId="5Hqzb8uLBTo"
            opts={opts}
            onReady={onReady}
            onEnd={() => setShowPopup(false)}
          />
        </div>
        {isMenuOpen && (
          <div className="fixed top-15 right-3 mt-16 mr-4 bg-white shadow-lg rounded-xl w-[200px] p-4 z-50">
            <ul className="flex flex-col space-y-2 w-full">
              <li className="w-full">
                <span
                  onClick={() => openDocFile("about-us")}
                  className="text-black text-lg  w-full"
                >
                  About us
                </span>
              </li>
              <div className="border-[1px] border-[#8E8E8E] rounded-lg"></div>
              <li>
                <span
                  onClick={() => openDocFile("privacy-policy")}
                  className="text-black text-lg"
                >
                  Privacy Policy
                </span>
              </li>
              <div className="border-[1px] border-[#8E8E8E] rounded-lg"></div>
              <li>
                <span
                  onClick={() => toggleSlider()}
                  className="text-black text-lg"
                >
                  Contact Us
                </span>
              </li>
              <div className="border-[1px] border-[#8E8E8E] rounded-lg"></div>
              <li>
                <span
                  onClick={() => openDocFile("terms-and-conditions")}
                  className="text-black text-lg"
                >
                  T&C
                </span>
              </li>
            </ul>
          </div>
        )}
        <SliderPopup isOpen={isSliderOpen} toggleSlider={toggleSlider} />
      </div>
      <div className="hidden md:block pt-5 2xl:pt-10">
        <div className="flex justify-center flex-col px-5 items-center ">
          <div className="flex justify-center gap-2">
            <img
              src="./assets/images/logo-2.png"
              className="h-[98px] object-contain  self-center  "
              alt=""
            />
            <div className="h-[100px]  border-l-2"></div>
            <img
              src="./assets/images/logo-1.png"
              className="h-[100px] object-contain  self-center  "
              alt=""
            />
          </div>

          <h2 className=" font-Antonio  text-[2.8rem]  font-bold leading-[82px] tracking-wide text-center text-white [text-shadow:_4.75px_4.75px_0px_#682E22]">
            Thank You, India.
          </h2>

          <p className="  font-OpenSans text-base leading-7 tracking-wide  font-semibold text-center text-white [text-shadow:_0px_4px_4px_#00000040]">
            Your support helped us in providing over&nbsp;
            <span className=" font-OpenSans  text-xl  ">1.5 lakh</span> meals to
            children in need. We shall <br /> continue this journey to spread
            hope, joy and build a brighter tomorrow.
          </p>
          <YouTube
            className="shadow-2xl pt-3"
            videoId="5Hqzb8uLBTo"
            opts={opts1}
            onReady={onReady}
            onEnd={() => setShowPopup(false)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Finish;
