import React, { useEffect, useRef } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";

function AboutUs() {
  const viewer = useRef(null);

  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "0a58b660-a234-4d52-b531-26ab711152d3",
        darkMode: true,
      },
      viewer.current
    ).then((instance) => {});
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="viewer w-full h-full" ref={viewer}></div>
         
    </div>
  );
}

export default AboutUs;
