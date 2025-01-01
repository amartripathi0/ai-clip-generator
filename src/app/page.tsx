"use client";
import { uploadVideo } from "@/actions/uploadVideo";
import Shorts from "@/components/Shorts";
import { useState } from "react";

const Home = () => {
  const [file, setFile] = useState<File>();
  const [transcript, setTranscript] = useState<
    {
      startTime: string;
      endTime: string;
      content: string;
      viralPotential: number;
    }[]
  >([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setTranscript([]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please add a video to upload!");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await uploadVideo(formData);
      if (res.status === 201 && res.message) {
        setIsUploading(false);
        setTranscript(JSON.parse(res.message));
      } else {
        setIsUploading(false);
        console.error(`Error: ${res.error || 'Unknown error'}`);
      }
    } catch (error) {
      setIsUploading(false);
      console.error(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        AI Video Clip Generator
      </h1>

      <div className="flex flex-col items-center gap-6">
        <input
          type="file"
          onChange={handleFileChange}
          accept="video/*,.mkv"
          name="video"
          className="block w-full max-w-xs px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        <button
          onClick={handleUpload}
          disabled={isUploading}
          className={`px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 focus:ring focus:ring-blue-400 ${
            isUploading && "bg-opacity-70"
          }`}
        >
          {!isUploading ? "Upload Video" : "Uploading..."}
        </button>
      </div>

      {file && (
        <div className="mt-10 flex-col md:flex-row flex items-start gap-4 h-full">
          <video
            controls
            src={URL.createObjectURL(file)}
            className="w-full max-w-xl rounded-md shadow-lg aspect-video"
          />

          <div className="bg-neutral-900 w-full h-full flex p-6 rounded-lg shadow-md">
            {isUploading ? (
              "Creating short clips, it may take 1-2 minutes..."
            ) : (
              <Shorts video={file ?? undefined} transcript={transcript} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
