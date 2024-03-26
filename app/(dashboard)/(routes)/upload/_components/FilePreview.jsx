import { Image, X } from "lucide-react";
import React from "react";

function FilePreview({ file, removeFile }) {
  return (
    <div className="flex items-center gap-2 justify-between mt-5 border rounded-md p-2 border-blue-200">
      <h2>
        File: {file.name} / {(file.size / 1024 / 1024).toFixed(2)} MB
      </h2>
      <X className="text-red-500 cursor-pointer" onClick={() => removeFile()} />
    </div>
  );
}

export default FilePreview;
