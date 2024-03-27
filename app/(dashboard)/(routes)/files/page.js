"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "@/firebaseConfig";
import Card from "./_components/Card";

function Files() {
  const { user } = useUser();
  const db = getFirestore(app);
  const [userFiles, setUserFiles] = useState([]);
  const [sortBy, setSortBy] = useState("date"); // Default sort by date
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUserFiles = async () => {
      const q = query(
        collection(db, "uploads"),
        where("userEmail", "==", user.primaryEmailAddress.emailAddress)
      );
      const querySnapshot = await getDocs(q);
      const files = [];
      querySnapshot.forEach((doc) => {
        files.push({ id: doc.id, ...doc.data() });
      });
      setUserFiles(files);
    };

    if (user) {
      fetchUserFiles();
    }
  }, [user]);

  // Sorting function
  const sortFiles = (key) => {
    let sortedFiles = [...userFiles];
    if (sortBy === key) {
      sortedFiles.reverse();
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      sortedFiles.sort((a, b) => {
        if (a[key] < b[key]) return sortOrder === "asc" ? -1 : 1;
        if (a[key] > b[key]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
      setSortOrder("asc");
      setSortBy(key);
    }
    setUserFiles(sortedFiles);
  };

  // Function to render sorting icon
  const renderSortingIcon = (key) => {
    if (sortBy === key) {
      return sortOrder === "asc" ? "▲" : "▼";
    }
    return null; // Hide sorting icon if not active
  };

  // Function to handle search
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  // Filter files based on search query
  const filteredFiles = userFiles.filter((file) =>
    file.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-800 lg:h-screen flex flex-col items-center">
      <div className="p-5 w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-1 rounded-md border border-gray-700 dark:border-gray-500 focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-600 text-black dark:text-white bg-white dark:bg-gray-900"
        />
      </div>

      <div>
        <dl className="grid grid-cols-5 gap-0 text-lg dark:divide-gray-900 pl-5 mt-3 border-b border-gray-400">
          <div
            className="text-gray-900 dark:text-white cursor-pointer"
            onClick={() => sortFiles("fileName")}
          >
            File Name {renderSortingIcon("fileName")}
          </div>
          <div
            className="text-gray-900 dark:text-white cursor-pointer"
            onClick={() => sortFiles("fileSize")}
          >
            File Size {renderSortingIcon("fileSize")}
          </div>
          <div
            className="text-gray-900 dark:text-white cursor-pointer"
            onClick={() => sortFiles("fileType")}
          >
            File Type {renderSortingIcon("fileType")}
          </div>
          <div
            className="text-gray-900 dark:text-white cursor-pointer"
            onClick={() => sortFiles("date")}
          >
            Date {renderSortingIcon("date")}
          </div>
          <div className="text-gray-900 dark:text-white">Time</div>
        </dl>
        <div className="p-5">
          {filteredFiles.length > 0 ? (
            filteredFiles.map((file) => <Card key={file.id} file={file} />)
          ) : (
            <p>No files matching the search criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Files;
