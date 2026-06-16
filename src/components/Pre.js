import React from "react";
import loaderSvg from "../Assets/pre2.svg";

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <img src={loaderSvg} alt="Loading..." style={{ width: "70px", height: "70px" }} />
    </div>
  );
}

export default Pre;
