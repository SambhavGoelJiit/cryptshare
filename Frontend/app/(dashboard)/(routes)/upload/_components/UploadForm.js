import React, { useState } from "react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

function UploadForm({ uploadBtnClick, progress, setProgress }) {
  const [file, setFile] = useState();
  const [errMsg, setErrMsg] = useState();

  const removeFile = () => {
    setFile(null);
    setProgress(null);
  };

  const onFileSelect = (file) => {
    console.log(file);
    if (file && file.size > 2000000) {
      console.log("File too large");
      setErrMsg("File too large");
      return;
    }
    setErrMsg(null);
    setFile(file);
  };
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-blue-500 dark:text-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX : 2 MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </label>
      </div>
      {errMsg ? <AlertMessage msg={errMsg} /> : null}
      {file ? <FilePreview file={file} removeFile={removeFile} /> : null}

      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <button
          disabled={!file}
          className="p-2 bg-primary text-white w-[20%] rounded-full mt-5 disabled:bg-gray-500  disabled:cursor-not-allowed"
          onClick={() => uploadBtnClick(file)}
        >
          Upload
        </button>
      )}
    </div>
  );
}

export default UploadForm;
