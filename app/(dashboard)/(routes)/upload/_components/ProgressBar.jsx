import React from "react";

function ProgressBar({ progress = 40 }) {
  return (
    <div className="bg-gray-400 w-full mt-3 h-2 rounded-full">
      <div
        className="p-1 bg-primary rounded-full h-2"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
