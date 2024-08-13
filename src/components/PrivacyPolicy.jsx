import React, { useEffect, useRef } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";

function PrivacyPolicy() {
  const viewer = useRef(null);

  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "f1002e6f-b75a-49f0-a47f-dceabe5f734d",
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

export default PrivacyPolicy;
