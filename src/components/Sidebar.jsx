import { useEffect, useState } from "react";

import SliderPopup from "./SliderPopup.jsx";

// import { error } from "../helper/hottoast";
// import axios from "../instance.js";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {

  const { pathname } = useLocation();
  const [showText, setShowText] = useState(true
  
    // !(
    //   pathname === "/register" ||
    //   pathname === "/verify-otp" ||
    //   pathname === "/thank-you" ||
    //   pathname === "/congratulations"
    // )
  );

  // const [isMenuOpen, setIsMenuOpen] = useState(false);



  

  console.log(showText);
  
  useEffect(() => {
    if (
      (
        pathname === "/register" ||
        pathname === "/verify-otp" ||
        pathname === "/thank-you" ||
        pathname === "/congratulations"
      )
    ) {
      setShowText(false);
    }
  }, [pathname]);





  const navigate = useNavigate("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsMenuOpen(false);
    setIsSliderOpen(!isSliderOpen);
  };

  const openDocFile = (path) => {
    setIsMenuOpen(false);
    
    window.open(`${window.location.origin}/${path}`, "_blank"); // Opens the file in a new tab
  };

  // const toggleMenu = () => {
  //   console.log("object");
  //   setIsMenuOpen((prev) => !prev);
  // };
  return (
    <div
      className="flex flex-col  pt-2 md:pt-[37px] "
    >
      <div className="flex justify-between px-6 h-full">
        <img
          onClick={() => navigate("/")}
          className="h-16 md:hidden "
          src="./assets/images/logo-2.png"
          alt=""
        />

        <img
          src="./assets/icons/menu-btn.png"
          className="h-11 md:hidden self-center"
          alt="Menu"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(prev=>!prev);
          }}
        />
      </div>
      {isMenuOpen && (
        <div className="fixed top-15 right-3 mt-16 mr-4 bg-white shadow-lg rounded-xl w-[200px] p-4 z-50">
          <ul className="flex flex-col space-y-2 w-full">
            <li className="w-full" >
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

      <img
        src="./assets/images/logo-1.png"
        className="h-[98px] -mt-[12px] max-w-full  md:hidden self-center  "
        alt=""
      />

      {/* border: 0.75px solid #682E21 */}
      {/* text-shadow: 2.24px 3.73px 0px  #682E21; */}
      <SliderPopup isOpen={isSliderOpen} toggleSlider={toggleSlider} />

      <div
        className={`${
          showText ? "block" : "hidden md:flex"
        } mt- md:mt- flex justify-center items-center text-[#F5F5F5] text-4xl leading-[46px]  md:text-[55px] md:leading-[72px] font-Antonio px-6 md:px-4 `}
      >
        {/* [text-shadow:_2.24px_3.73px_0_#682E21] */}
        <h1
          className="relative inline-block  [text-shadow:_2.24px_3.73px_0_#682E21]
 md:text-shadow-custom text-center"
        >
          #FreedomFromHunger
        </h1>
      </div>
    </div>
    // <div className="flex flex-col mt-[37px]">
    //   <div className="flex justify-between px-6 h-full">
    //     <img
    //       onClick={() => navigate("/")}
    //       className="h-[70px] w-[65px] flex md:hidden self-center"
    //       src="./assets/images/logo-2.png"
    //       alt=""
    //     />

    //     <img
    //       src="./assets/icons/menu-btn.png"
    //       className="h-[44px] w-[44px] flex md:hidden self-center"
    //       alt="Menu"
    //       onClick={toggleMenu}
    //     />
    //   </div>
    //   {isMenuOpen && (
    //     <div className="fixed top-15 right-3 mt-16 mr-4 bg-white shadow-lg rounded-xl w-[200px] p-4 z-50">
    //       <ul className="flex flex-col space-y-2">
    //         <li>
    // <span
    //   onClick={() => openDocFile("about-us")}
    //   className="text-black text-lg"
    // >
    //   About us
    // </span>
    //         </li>
    //         <div className="border-[1px] border-[#8E8E8E] rounded-lg"></div>
    //         <li>
    //           <span
    //             onClick={() => openDocFile("privacy-policy")}
    //             className="text-black text-lg"
    //           >
    //             Privacy Policy
    //           </span>
    //         </li>
    //         <div className="border-[1px] border-[#8E8E8E] rounded-lg"></div>
    //         <li>
    //           <span
    //             onClick={() => openDocFile("terms-and-conditions")}
    //             className="text-black text-lg"
    //           >
    //             T&C
    //           </span>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    //   <img
    //     src="./assets/images/logo-1.png"
    //     className="h-[98px] w-[94px] flex md:hidden self-center mt-auto"
    //     alt=""
    //   />
    //   <div className="flex justify-center items-center text-[#F5F5F5] text-[38px] sm:text-[45px] md:text-[55px] font-Antonio px-4 sm:px-6">
    //     <h1 className="relative inline-block text-shadow-custom text-center">
    //       #FreedomFromHunger
    //     </h1>
    //   </div>

    //   {/* Bottom div */}
    // </div>
  );
};

export default Sidebar;
