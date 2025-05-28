import React from "react";

const ResumeViewer = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src="/Muttu_Karani_Resume.pdf"
        title="Muttu Karani Resume"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default ResumeViewer;
