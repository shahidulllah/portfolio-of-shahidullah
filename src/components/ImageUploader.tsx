"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { useState } from "react";

export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (e: any) => {
    const file = e.target.files[0] ;
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImageUrl(data.url);
  };

  return (
    <div className="py-12 text-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="border p-2"
      />

      {imageUrl && (
        <Image src={imageUrl} alt="Uploaded" width={200} height={240} className="mt-4 w-40 rounded" />
      )}
      <button className="border ml-4" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}
