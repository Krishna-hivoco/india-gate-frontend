import React, { useState } from "react";

const SliderPopup = ({ isOpen, toggleSlider }) => {
  const shareSocialMediaURL = (path) => {
    window.open(`${path}`, "_blank"); // Opens the file in a new tab
  };

  return (
    <>
      {/* Slider Popup */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-t-lg transition-transform duration-300 z-50 visible md:hidden  ${
          isOpen ? "transform translate-y-0" : "transform translate-y-full"
        }`}
        style={{ height: "266px", transition: "transform 0.3s ease-in-out" }}
      >
        <div className="p-4">
          <div className="flex justify-end  ">
            <img
              onClick={() => toggleSlider()}
              className="hover:cursor-pointer"
              src="/assets/svgs/close.svg"
              alt=""
              srcSet=""
            />
          </div>
          <div className="flex flex-col items-center mt-5">
            <p className="font-OpenSans text-base text-black">
              You can contact us via:{" "}
            </p>
            <div className="flex gap-1 items-center mt-7">
              <img
                className="w-16"
                onClick={() =>
                  shareSocialMediaURL(
                    "https://www.youtube.com/c/IndiaGateFoods"
                  )
                }
                src="/assets/svgs/youtube.svg"
                alt=""
                srcSet=""
              />
              <img
                className="w-16"
                onClick={() =>
                  shareSocialMediaURL(
                    "https://www.instagram.com/indiagatefoods/?hl=en"
                  )
                }
                src="/assets/svgs/insta.svg"
                alt=""
                srcSet=""
              />
              <img
                className="w-16"
                onClick={() =>
                  shareSocialMediaURL(
                    " https://www.facebook.com/indiagatefoods"
                  )
                }
                src="/assets/svgs/facebook.svg"
                alt=""
                srcSet=""
              />
              <img
                className="w-16"
                onClick={() =>
                  shareSocialMediaURL("https://x.com/IndiaGateFoods?mx=2")
                }
                src="/assets/svgs/twitter.svg"
                alt=""
                srcSet=""
              />
              <img
                className="w-16"
                onClick={() =>
                  shareSocialMediaURL(
                    "https://www.linkedin.com/company/krbl-limited"
                  )
                }
                src="/assets/svgs/linkdin.svg"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional Backdrop with Blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          //   onClick={toggleSlider}
          style={{ transition: "opacity 0.3s ease-in-out" }}
        ></div>
      )}
    </>
    // <div className={`relative h-screen ${isOpen ? "overflow-hidden" : ""}`}>
    //   {/* Content of the Page */}
    //   <div
    //     className={`${
    //       isOpen ? "filter blur-sm" : ""
    //     } transition-filter duration-300`}
    //   ></div>

    //   {/* Toggle Button */}

    //   {/* Slider Popup */}
    //   <div
    //     className={`fixed bottom-0 left-0 w-full bg-white shadow-lg  transition-transform duration-300 z-50 rounded-t-2xl ${
    //       isOpen ? "transform translate-y-0" : "transform translate-y-full"
    //     }`}
    //     style={{ height: "220px", transition: "transform 0.3s ease-in-out" }}
    //   >
    //     <div className="p-4">
    //       <div className="flex justify-end  ">
    //         <img
    //           onClick={() => setIsOpen(false)}
    //           className="hover:cursor-pointer"
    //           src="/assets/svgs/close.svg"
    //           alt=""
    //           srcSet=""
    //         />
    //       </div>
    //       <div className="flex flex-col items-center mt-5">
    //         <p className="font-OpenSans text-base text-black">
    //           You can contact us via:{" "}
    //         </p>
    //         <div className="flex gap-1 items-center mt-5">
    //           <img
    //             onClick={() =>
    //               shareSocialMediaURL(
    //                 "https://www.youtube.com/c/IndiaGateFoods"
    //               )
    //             }
    //             src="/assets/svgs/whatsapp.svg"
    //             alt=""
    //             srcSet=""
    //           />
    //           <img
    //             onClick={() =>
    //               shareSocialMediaURL(
    //                 " https://www.facebook.com/indiagatefoods"
    //               )
    //             }
    //             src="/assets/svgs/facebook.svg"
    //             alt=""
    //             srcSet=""
    //           />
    //           <img
    //             onClick={() =>
    //               shareSocialMediaURL("https://x.com/IndiaGateFoods?mx=2")
    //             }
    //             src="/assets/svgs/twitter.svg"
    //             alt=""
    //             srcSet=""
    //           />
    //           <img
    //             onClick={() =>
    //               shareSocialMediaURL(
    //                 "https://www.linkedin.com/company/krbl-limited"
    //               )
    //             }
    //             src="/assets/svgs/linkdin.svg"
    //             alt=""
    //             srcSet=""
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Optional Backdrop with Blur */}
    //   {isOpen && (
    //     <div
    //       className="fixed inset-0 bg-black opacity-50 z-40"
    //       onClick={toggleSlider}
    //       style={{ transition: "opacity 0.3s ease-in-out" }}
    //     ></div>
    //   )}
    // </div>
  );
};

export default SliderPopup;
