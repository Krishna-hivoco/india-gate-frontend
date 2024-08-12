import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from "react-share";

const Congratulations = () => {
  // const [searchParams] = useSearchParams();
  // const url = searchParams.get("url");
  // // const [url, seturl] = useState(initialState)
  // console.log("url",url);
  const [isShared, setIsShared] = useState(true);

  return (
    <div className="flex flex-col md:flex-row justify-between p-[52px] h-[65vh] md:h-full md:pt-20 md:pb-40">

      <div className="px-6 md:p-0 flex flex-col items-center  gap-[12.5px] md:gap-5 flex-1 md:max-w-[400px] ">
        <img
          className="hidden md:block  h-48 mb-7"
          src="assets/images/india-gate-logo.png"
          alt=""
        />

        <h2 className="  md:mb-5 font-Antonio text-[41.58px] font-bold leading-[54px] md:text-[55px]  md:leading-[72px] text-center text-white [text-shadow:_3.56px_3.56px_0px_#682E22] md:[text-shadow:_6px_6px_0px_#682E22]">
          CONGRATULATIONS!
        </h2>

        <p className=" font-OpenSans text-[15px] leading-[22px] md:text-2xl font-bold text-center text-white [text-shadow:_0px_4px_4px_#00000040]">
          You’ve taken a powerful step. We are creating a future where no child
          is left hungry. Stay connected, this is just the beginning.
        </p>
      </div>

      <div className="mt-8 md:m-0 md:w-96 flex flex-col gap-8 md:gap-6">
        <img
          className="px-[72px] md:p-0"
          src="/assets/images/certificate.png"
          alt="certificate image"
        />

        <div
          className={`flex flex-1  mb-9 ${
            !isShared
              ? "mx-6  md:m-0"
              : "flex-col gap-2  items-center min-h-[56px] md:min-h-[66px]"
          }`}
        >
          <Button
            // onClick={registerUserDate}
            text={`Download`}
            className={`hidden md:flex`}
          />
          {/* <button
            className="w-1/2 py-[17px]  mr-[6px] md:mr-2  rounded-[100px] md:rounded-[71px] font-Antonio text-xl leading-[25.88px] font-bold  md:text-[22px] md:leading-7 text-center text-[#F5F5F5] border-[2px] 
              bg-gradient-to-r from-[#682E21] via-[rgba(126,75,63,0.8)] to-[#682E21]
              "
          >
            Download
          </button> */}

          <>
            <h2 className="font-OpenSans text-sm leading-[19px] md:text-base text-nowrap font-normal md:leading-[22px] text-center text-white">
              Share on Social Media
            </h2>

            <div className=" flex gap-4">
              <img
                src="./assets/images/icon-one.png"
                className="w-7 h-7 hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                alt=""
              />
              <WhatsappShareButton url={'certificateUrl'} title={"Certificate"}>
                <img
                  src="./assets/images/icon-two.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </WhatsappShareButton>
              <LinkedinShareButton url={'certificateUrl'} title={"Certificate"}>
                <img
                  src="./assets/images/icon-three.png"
                  className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                  alt=""
                />
              </LinkedinShareButton>
              <img
                src="./assets/images/icon-four.png"
                className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                alt=""
              />
              <img
                src="./assets/images/icon-five.png"
                className="w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 transition-all delay-150 duration-150 ease-in"
                alt=""
              />
            </div>
          </>

          {/* <button
            onClick={() => {
              setIsShared(true);
            }}
            className={`${
              !isShared ? "opacity-100" : "opacity-0 max-h-0"
            } w-1/2 py-[17px]  rounded-[100px]
                shadow-[0px_4px_5.17px_0px_#F5F5F51F] shadow-[0px_6px_18.6px_0px_#D9D9D926]
                  md:rounded-[71px] font-Antonio text-xl leading-[25.88px] md:text-[22px] md:leading-7 text-center text-white  border-[2px] md:border-[2.55px] border-white `}
          >
            Share
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
