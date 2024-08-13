import React, { useEffect, useRef } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";

function TermsCondition() {
  const viewer = useRef(null);

  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "10ccaf61-6ade-47fa-ac52-90df41bb7ada",
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

export default TermsCondition;
