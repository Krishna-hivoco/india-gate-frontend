import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "../instance.js";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startCounter = () => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 100) {
          count += 1;
          setPercentage(count);
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust the speed of the animation here
    };

    // Start counter animation
    startCounter();

    const generateCretificate = async () => {
      const response = await axios.post("/generate-certificate", {
        name: sessionStorage.getItem("user_name"),
        phone: sessionStorage.getItem("user_phone"),
      });
      setPercentage(100);
      setIsLoading(false);
      sessionStorage.setItem("user_url", response.data.msg.url);
      sessionStorage.setItem("user_filename", response.data.msg.certificates);
      //   setCertificateUrl(response.data.msg.url);
    };
    generateCretificate();
  }, []);

  const sendWhatsAPP = async () => {
    const response = await axios.post("/send-whatsapp-message", {
      name: sessionStorage.getItem("user_name"),
      destination: sessionStorage.getItem("user_phone"),
      image: sessionStorage.getItem("user_url"),
    });
    navigate("/congratulation");
  };

  const getColorFromPercentage = (percent) => {
    const hue = ((percent / 100) * 120).toString(); // Green (120) to Red (0)
    return `hsl(${hue}, 100%, 50%)`;
  };

  const borderColor = getColorFromPercentage(percentage);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-[52px] h-[65vh] md:h-full md:pt-20 md:pb-40">
        <div className="flex flex-col justify-start w-[344px]  left-20 gap-3 top-40 ">
          <img
            className="w-[160px] h-[200px] ml-24"
            src="./assets/images/logo-2.png"
            alt=""
          />
          <div className="flex justify-center items-center text-[#F5F5F5] font-bold text-[70px] font-Antonio">
            <h1 className="relative inline-block text-shadow-custom">
              Thank You
            </h1>
          </div>
          <p className="text-[24px] text-white text-center font-bold font-OpenSans">
            For pledging your support and participating in the initiative.
            Together, we are making a difference.
          </p>
          <div className="flex justify-center">
            {/* <img
            src="./assets/icons/loading.png"
            className="h-[98px] w-[98px]"
            alt=""
          /> */}

            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              className="w-24 h-24 rounded-full p-3"
            >
              <div
                className={`flex items-center justify-center transition-all duration-1000 text-white font-OpenSans`} // Tailwind classes for smooth transition
                style={{
                  border: "8px solid",
                  borderRadius: "50%",
                  borderColor: borderColor,
                  width: "100%",
                  height: "100%",
                  fontSize: "16px",
                  fontWeight: "bold",
                  // color: "#000",
                  transition: "border-color 1s ease", // Ensure smooth color transition
                }}
              >
                {percentage}%
              </div>
            </div>
          </div>
          <p className="text-[18px] text-white text-center font-normal font-OpenSans">
            {isLoading ? "Generating yourCertificate..." : "Completed"}
          </p>
          <Button
            onClick={() => sendWhatsAPP()}
            text={`view certificate`}
            className={`hidden md:flex`}
          />
        </div>

        <Button
          onClick={() => sendWhatsAPP()}
          text={`view certificate`}
          className={`!w-[80%] !mx-auto absolute bottom-0 left-0 right-0 flex justify-center mb-6 md:hidden  `}
        />
        <div className="flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px]   left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
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

export default Thankyou;
