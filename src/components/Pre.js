import React from "react";
function Pre({ load }) {
  // console.log(load, 'preComponent');
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
