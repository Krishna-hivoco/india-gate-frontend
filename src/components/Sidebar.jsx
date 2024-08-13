import { useEffect, useState } from "react";
import { error } from "../helper/hottoast";
import axios from "../instance.js";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openDocFile = (path) => {
    // Replace with your actual file URL
    // const fileUrl =
    //   "/Draft - Terms and Conditions - Freedom From Hunger Campaign - August 2024.docx";
    window.open(`${window.location.origin}/${path}`, "_blank"); // Opens the file in a new tab
  };

  const toggleMenu = () => {
    console.log("object");
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col mt-[37px]">
      <div className="flex justify-between px-6 h-full">
        <img
          onClick={() => navigate("/")}
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
              <span className="text-black text-lg">About us</span>
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
        className="h-[98px] w-[94px] flex md:hidden self-center mt-auto"
        alt=""
      />
      <div className="flex justify-center items-center text-[#F5F5F5] text-[38px] sm:text-[45px] md:text-[55px] font-Antonio px-4 sm:px-6">
        <h1 className="relative inline-block text-shadow-custom text-center">
          #FreedomFromHunger
        </h1>
      </div>

      {/* Bottom div */}
    </div>
  );
};

export default Sidebar;
