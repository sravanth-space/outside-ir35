import React from "react";

const Loading = ({ center = false }) => {
  return <div className={center ? "loading loading-center" : "loading"}></div>;
};
export default Loading;
