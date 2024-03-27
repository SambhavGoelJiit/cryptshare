import React from "react";

const fileTypeMapping = {
  "image/jpeg": "JPG",
  "image/png": "PNG",
  "application/pdf": "PDF",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "DOCX",
};

function Card({ file }) {
  const fileTypeLabel = fileTypeMapping[file.fileType] || file.fileType;
  return (
    <div className="flow-root">
      <dl className="grid grid-cols-5 gap-5 text-sm dark:divide-gray-700">
        <div className="text-gray-700 dark:text-gray-200">
          <a
            href={file.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {file.fileName}
          </a>
        </div>
        <div className="text-gray-700 dark:text-gray-200">
          {(file.fileSize / 1024 / 1024).toFixed(2)} MB
        </div>
        <div className="text-gray-700 dark:text-gray-200">{fileTypeLabel}</div>
        <div className="text-gray-700 dark:text-gray-200">
          {new Date(file.timestamp.seconds * 1000).toLocaleDateString()}
        </div>
        <div className="text-gray-700 dark:text-gray-200">
          {new Date(file.timestamp.seconds * 1000).toLocaleTimeString()}
        </div>
      </dl>
    </div>
  );
}

export default Card;
