import { useState } from "react";
import Button from "../components/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "../instance.js";
import { error, success } from "../helper/hottoast.js";

const Otp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const phone = searchParams.get("phone");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const update = (e, i) => {
    setOtp((otp) => {
      const newOtp = [...otp];
      newOtp[i] = e.target.value;
      return newOtp;
    });
  };
  console.log("data", phone, otp);
  const buttonDisable = () => {
    const hasEmptyValue = otp.some((value) => value === "");
    if (hasEmptyValue) {
      return true;
    }
    return false;
  };

  const focusNext = (e) => {
    if (e.target.value.length === 1 && e.target.nextSibling)
      e.target.nextSibling.focus();
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value.length === 0 &&
      e.target.previousSibling
    )
      return e.target.previousSibling.focus();
    if (e.key.length !== 1) return;
    if (Number.isNaN(Number(e.key)) || e.key === " ") e.preventDefault();
  };

  const varifyOTP = async () => {
    const inputObject = {
      phone,
      otp: otp.join(""),
    };
    if (buttonDisable()) {
      success("Please fill OTP.");
      return;
    }
    try {
      const response = await axios.post("/otp/verify-otp", inputObject);
      // sessionStorage.setItem("user_isVerified", response.data.msg.isVerified);
      if (response.status === 200) {
        success(response.data.msg);
        navigate("/thank-you");
        return;
      }
    } catch (err) {
      error("Invalid OTP");
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-[52px] h-auto md:h-full md:pt-20 md:pb-40">
        <div className="flex flex-col justify-center md:justify-start items-center w-full md:w-[344px] left-0 md:left-20 gap-7 top-40 px-4 md:px-0">
          <img
            className="w-[160px] h-[200px] hidden md:flex"
            src="./assets/images/logo-2.png"
            alt=""
          />
          <p className="text-[18px] md:text-[24px] text-white text-center font-bold font-OpenSans md:mt-0">
            Enter the OTP sent on your registered mobile number
          </p>
          <div className="flex justify-between gap-4 md:gap-3 lg:gap-4">
            {otp.map((n, i) => (
              <input
                key={i}
                type="text"
                value={otp[i]}
                maxLength={1}
                inputMode="numeric"
                onInput={focusNext}
                autoFocus={n === 1}
                onKeyDown={handleKeyDown}
                onChange={(e) => update(e, i)}
                className="w-[60px] h-[100px] rounded-lg border border-true-gray-200
                p-2 text-center font-bold leading-8 
                focus:border-primary focus:ring-0 
                md:w-[60px] lg:w-[70px] text-[#682E21] font-Antonio text-[70px] bg-[#ECDEDB]"
              />
            ))}
          </div>
          <Button
            onClick={varifyOTP}
            text={`verify`}
            className={`hidden md:flex`}
          />
        </div>
        <Button
          onClick={varifyOTP}
          text={`verify`}
          className="!w-[80%] !mx-auto absolute bottom-0 left-0 right-0 flex justify-center mb-6 md:hidden"
        />
        <div className="flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px]  left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
          <div className="flex flex-col gap-24 text-center text-white items-center">
            <img
              src="./assets/images/logo-1.png"
              className="h-[250px] w-[250px] hidden md:flex "
              alt=""
            />
            <div className="text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent px-6 py-2 rounded-xl">
              <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold ">
                Pledges so far
              </p>
              <div className="flex flex-col mt-[-10px] md:mt-[-20px]">
                <p className="text-shadow-custom text-[62px] md:text-[120px] font-bold font-Antonio md:h-[160px]">
                  {"1000"}
                </p>
                <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold">
                  and counting...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
