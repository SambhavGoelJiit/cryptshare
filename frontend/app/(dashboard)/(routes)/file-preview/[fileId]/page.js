"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import { FileIcon, LinkIcon, ClipboardCopyIcon } from "lucide-react";

const fileTypeMapping = {
  "image/jpeg": "JPG",
  "image/png": "PNG",
  "application/pdf": "PDF",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "DOCX",
};

function FilePreview({ params }) {
  const db = getFirestore(app);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "uploads", params?.fileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFile(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching file details:", error);
      } finally {
        setLoading(false);
      }
    };
    if (params?.fileId) {
      fetchData();
    }
  }, [db, params?.fileId]);

  // Function to handle copying the short URL to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(file.fileUrl);
      setCopySuccess(true);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const fileTypeLabel = file
    ? fileTypeMapping[file.fileType] || file.fileType
    : "";

  return (
    <div className="bg-gray-50 dark:bg-gray-800 lg:h-screen p-5 px-8 md:px-28">
      {loading ? (
        <p>Loading file details...</p>
      ) : file ? (
        <div className="p-3">
          <h1 className="text-primary h-12 text-3xl mb-6">File Details</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="flex items-center mb-2">
                <FileIcon className="w-6 h-6 mr-2" />
                <span className="text-pink-500 font-medium">Name:</span>{" "}
                {file.fileName}
              </p>
              <p className="flex items-center mb-2">
                <FileIcon className="w-6 h-6 mr-2" />
                <span className="text-pink-500 font-medium">Type:</span>{" "}
                {fileTypeLabel}
              </p>
            </div>
            <div>
              <p className="flex items-center mb-2">
                <FileIcon className="w-6 h-6 mr-2" />
                <span className="text-pink-500 font-medium">Size:</span>{" "}
                {(file.fileSize / 1024 / 1024).toFixed(2)} MB
              </p>
              <p className="flex items-center mb-2">
                <LinkIcon className="w-6 h-6 mr-2" />
                <span className="text-pink-500 font-medium">URL:</span>{" "}
                {file.shortUrl}
                <button
                  onClick={copyToClipboard}
                  className="ml-2 p-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  <ClipboardCopyIcon className="w-5 h-5" />
                </button>
              </p>
              {copySuccess && (
                <p className="text-green-500">Copied to clipboard!</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>No file details available</p>
      )}
    </div>
  );
}

export default FilePreview;
