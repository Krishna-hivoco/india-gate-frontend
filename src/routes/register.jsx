import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import axios from "../instance.js";

import { success, error } from "../helper/hottoast.js";
import { useNavigate } from "react-router-dom";

const Register = ({ userCount }) => {
  const navigate = useNavigate();
  const [inputObject, setInputObject] = useState({
    name: "",
    phone: "",
  });

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    // Allow only digits

    if (value.length <= 10) {
      setInputObject({ ...inputObject, phone: value });
    }
    // setInputObject({ ...inputObject, phone: value });
  };

  const buttonDisable = () => {
    if (
      inputObject.name === "" ||
      inputObject.name === " " ||
      inputObject.phone === "" ||
      inputObject.phone.length < 10
    ) {
      return true;
    }
    return false;
  };
  const registerUserDate = async () => {
    if (buttonDisable()) {
      success("Please Enter valid name and mobile number.");
      return;
    }
    try {
      const response = await axios.post("/user/register", inputObject);
      sessionStorage.setItem("user_name", response.data.msg.name);
      sessionStorage.setItem("user_phone", response.data.msg.phone);
      sessionStorage.setItem("user_isVerified", response.data.msg.isVerified);
      if (response.status === 201) {
        success("Verify Your Phone number.");
        navigate(`/verify-otp?phone=${response.data.msg.phone}`);
        return;
      }

      if (response.status === 200) {
        navigate("/thank-you");
        return;
      }
    } catch (err) {
      sessionStorage.setItem("user_name", err.response.data.msg.name);
      sessionStorage.setItem("user_phone", err.response.data.msg.phone);
      sessionStorage.setItem(
        "user_isVerified",
        err.response.data.msg.isVerified
      );
      if (err.response.status === 409) {
        navigate("/thank-you");
        return;
      } else {
        error("Internal server error");
        return;
      }
    }
  };

  return (
    <>
      <div className=" flex flex-col  md:flex-row justify-between p-[px] h-[vh] md:h-full md:p-[52px] md:pt-20 md:pb-40">
        <div className=" flex flex-col justify-center md:justify-start items-center w-full md:w-[344px]  left-0 md:left-20  gap-3 md:gap-7 top-40 px-7 md:px-0">
          <img
            className="w-[160px] h-[200px] hidden md:flex"
            src="./assets/images/logo-2.png"
            alt=""
          />

          <p className="px-14 md:p-0 text-[14px] leading-[22px] md:text-2xl text-white text-center font-bold font-OpenSans  md:mt-0">
            Enter your details to get your
            <br /> pledge certificate
          </p>

          <InputField
            text={"Enter full name"}
            icon={`./assets/icons/user.png`}
            className="!h-4 !w-4"
            onChange={(e) =>
              setInputObject({ ...inputObject, name: e.target.value })
            }
            maxLength="15"
          />

          <InputField
            onChange={handlePhoneChange}
            value={inputObject.phone}
            type="number"
            pattern="[0-9]{10}"
            text={"Enter mobile number"}
            icon={`./assets/icons/phone.png`}
          />

          <Button
            onClick={registerUserDate}
            text={`get certificate`}
            className={`hidden md:flex`}
          />
        </div>

        <div className="hidden md:flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px] pb-10 md:pb-0   left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
          <div className="flex flex-col gap-24 text-center text-white items-center">
            <img
              src="./assets/images/logo-1.png"
              className="h-[250px] w-[250px] hidden md:flex "
              alt=""
            />
            <div className="hidden md:block text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent px-6 py-2 rounded-xl">
              <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold ">
                Pledges so far
              </p>
              <div className="flex flex-col mt-[-10px] md:mt-[-20px]">
                <p className="text-shadow-custom text-[62px] md:text-[120px] font-bold font-Antonio md:h-[160px]">
                  {userCount}
                </p>
                <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold">
                  and counting...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-8 left-0 right-0 flex  md:hidden flex-col items-center gap-3 ">
        <div className=" text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent     px-6 py-2 rounded-xl ">
          <p className="text-white  font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px]  md:text-[20px] md:leading-6 font-bold ">
            Pledges so far
          </p>

          <div className="flex flex-col mt-[-10px]  md:mt-[-20px]  ">
            {/* text-shadow: 3.54px 3.54px 0px  #682E21; */}
            {/* [text-shadow:_3.54_3.54px_0_#682E21] */}

            <p className="text-shadow-custom text-[45.3px] leading-[58.7px]  md:text-[120px] md:leading-[165px] font-bold font-Antonio md:h-[160px]">
              {userCount}
            </p>

            <p className="text-white mt- font-OpenSans  md:font-Inter text-[11.3px] leading-[15.4px] m  md:text-[20px] md:leading-6 font-bold ">
              and counting...
            </p>
          </div>
        </div>

        <Button
          onClick={registerUserDate}
          text={`get certificate`}
          className={`!w-[80%] !mx-auto flex justify-center  md:hidden  `}
        />
      </div>
    </>
  );
};

export default Register;
