"use client";
import React from "react";
import UploadForm from "./_components/UploadForm";
import { getStorage } from "firebase/storage";
import { app } from "@/firebaseConfig";
import { ref, uploadBytesResumable } from "firebase/storage";

function Upload() {
  const storage = getStorage(app);
  const uploadFile = (file) => {
    if (!file) {
      console.error("No file provided for upload.");
      return;
    }

    const metadata = {
      contentType: file.type || "application/octet-stream",
    };

    const fileRef = ref(storage, "CryptShare/" + file.name);
    const uploadTask = uploadBytesResumable(fileRef, file, metadata);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 lg:h-screen p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center p-5">
        Start <strong className="text-primary">Uploading</strong> and{" "}
        <strong className="text-primary">Sharing</strong> files..
      </h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} />
    </div>
  );
}

export default Upload;
