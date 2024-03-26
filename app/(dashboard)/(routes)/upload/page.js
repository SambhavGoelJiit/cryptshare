"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import { randomGen } from "@/app/_utils/randomGen";
import { useRouter } from "next/navigation";

function Upload() {
  const router = useRouter();
  const { user } = useUser();
  const [progress, setProgress] = useState();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const [uploadCompleted, setUploadCompleted] = useState();
  const [fileDocId, setFileDocId] = useState();

  const uploadFile = (file) => {
    const storageRef = ref(storage, "CryptShare/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);

      if (progress === 100) {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file, downloadURL);
        });
      }
    });
    uploadTask
      .then(() => {
        setUploadCompleted(true);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = randomGen().toString();
    await setDoc(doc(db, "uploads", docId), {
      id: docId,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: fileUrl,
      userEmail: user.primaryEmailAddress.emailAddress,
      userName: user.fullName,
      password: "",
    });
    setFileDocId(docId);
  };

  useEffect(() => {
    if (uploadCompleted) {
      setTimeout(() => {
        console.log("Redirecting...");
        router.push("/file-preview/" + fileDocId);
      }, 2000);
    }
  }, [uploadCompleted, fileDocId]);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 lg:h-screen p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center p-5">
        Start <strong className="text-primary">Uploading</strong> and{" "}
        <strong className="text-primary">Sharing</strong> files..
      </h2>
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
        setProgress={setProgress}
      />
    </div>
  );
}

export default Upload;
