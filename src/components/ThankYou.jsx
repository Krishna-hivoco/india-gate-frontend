// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

const ThankYou = () => {
  return (
    <div className="pb-7 md:px-[60px] md:pt-[260px] md:pb-[160px]  block md:flex justify-between">
      <div className="md:hidden flex justify-between w-full pl-5 pr-4 pt-5 ">
        <img
          className="h-16 mt-[-px] md:m-0 block md:hidden"
          src="assets/images/india-gate-logo.png"
          alt=""
        />

        <img
          className="h-11 block md:hidden"
          src="assets/svgs/menu-dots.svg"
          alt="menu-dots"
        />
      </div>

      <div className="flex flex-col gap-[9px] px-6 md:p-0 md:gap-0 items-center  flex-1  md:max-w-[366px]">
        <img
          className="-mt-2 block md:hidden mb-[10px]  h-[98px] md:h-[214px] [text-shadow:_0_0.86px_6.85px_#ECDEDB52]"
          src="/assets/images/grains-of-hope.png"
          alt=""
        />

        <img
          className="hidden md:block h-16 md:h-48 md:mb-5"
          src="assets/images/india-gate-logo.png"
          alt=""
        />

        <h2 className="mb-5 font-Antonio  text-[55px] md:text-[70px]  font-bold leading-[78px]  md:leading-[90.58px] text-center text-white [text-shadow:_4.75px_4.75px_0px_#682E22] md:[text-shadow:_6px_6px_0px_#682E22]">
          Thank You!{" "}
        </h2>

        <p className="md:mb-4  font-OpenSans text-[15px] leading-[22px] md:text-2xl  font-bold text-center text-white [text-shadow:_0px_4px_4px_#00000040]">
          For pledging your support and participating in the initiative.
          Together, we are making a difference.
        </p>

        <div className="hidden md:block mb-4 bg-[#0000004D] rounded-full  w-16 h-16 md:w-[98px] md:h-[98px] "></div>

        <p className="hidden md:block font-OpenSans text-[13px] leading-[22px] md:text-2xl font-normal text-center text-white [text-shadow:_0_4px_4px_#00000040]">
          Generating your Certificate...
        </p>
      </div>

      <div className="absolute md:static left-1/2 -translate-x-1/2 bottom-[30px]  flex flex-col md:gap-[106px] items-center md:items-end md:max-w-[300px] ">
        <img
          className="hidden md:block h-[98px] md:h-[214px] [text-shadow:_0_0.86px_6.85px_#ECDEDB52]"
          src="/assets/images/grains-of-hope.png"
          alt=""
        />

        <div className="flex md:block flex-col gap-2 items-center ">
          <div className="bg-[#00000080] py-1 px-5 md:p-0   rounded-xl md:block flex flex-col items-center  md:rounded-none md:bg-transparent">
            <p className="font-Inter md:font-OpenSans md:text-xl text-[11.34px] leading-[15.45px]  md:leading-[24.2px] font-semibold md:font-bold  text-center md:text-right text-[#F5F5F5] mb-0 md:mb-[-10px]">
              Pledges so far
            </p>

            <h1 className="text-[#F5F5F5] font-Antonio text-[45.37px] md:text-[128px] font-bold  leading-[58.7px] md:leading-[165px] text-right [text-shadow:_3.54px_3.54px_0px_#682E21] md:[text-shadow:_5px_5px_0px_#682E21]">
              99572
            </h1>

            <p className="font-Inter md:font-OpenSans md:text-xl text-xs leading-4  md:leading-[24.2px] font-bold md:font-semibold text-center md:text-right text-[#F5F5F5] mt-0 md:mt-[-10px]">
              and counting...
            </p>
          </div>

          <div className="block md:hidden  bg-[#0000004D] rounded-full  w-16 h-16"></div>
        </div>

        <p className="mt-[2.1px] md:m-0 block md:hidden font-OpenSans text-[13px] leading-[22px] md:text-2xl font-normal text-center text-white [text-shadow:_0_4px_4px_#00000040]">
          Generating your Certificate...
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
