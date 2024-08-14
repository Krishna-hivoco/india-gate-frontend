import React, { useState } from "react";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";

function Share() {
  const [searchParams] = useSearchParams();

  // Get the value of the query parameter
  const certificateUrl = decodeURIComponent(searchParams.get("url"));
  //   console.log("certificateUrl", certificateUrl);

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

  return (
    <>
      <div className="relative min-h-screen  bg-custom-bg-2 md:bg-custom-bg bg-cover bg-center   ">
        <div className=" min-h-full w-full md:w-[500px] p-20 mx-auto  ">
          <img
            className=" w-full md:p-0"
            src={`${certificateUrl}`}
            alt="certificate image"
          />
          <Button
            onClick={() => downloadImage(certificateUrl, "your-certificate")}
            text={`download`}
            className={` md:flex w-52 mt-5`}
          />
        </div>
      </div>
    </>
  );
}

export default Share;
