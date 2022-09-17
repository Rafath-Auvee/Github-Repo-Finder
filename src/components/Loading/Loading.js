import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen	">
      <p>Please Wait</p>
      <progress className="progress  progress-primary w-60"></progress>
    </div>
  );
};

export default Loading;