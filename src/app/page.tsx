"use client";
import { useState } from "react";

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        const message = data.Message;
        console.log(message);
        
        const jsonPart = message.match(/```json\n([\s\S]*)\n```/);
        if (jsonPart && jsonPart[1]) {
          try {
            const array = JSON.parse(jsonPart[1]);
            setTranscript(array);
          } catch (e) {
            console.error("Error parsing JSON:", e);
            setTranscript([]); // Reset transcript on error
          }
        } else {
          console.error("No JSON part found in the message.");
          setTranscript([]); // Reset transcript if no JSON part
        }
      } else {
        const data = await res.json();
        console.error(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
    console.log(transcript);
  };

  function handleGetShorts() {
    // Functionality to get shorts can be implemented here
  }

  return (
    <div>
      <h1>AI Video Clip Generator</h1>
      <input
        type="file"
        onChange={handleFileChange}
        accept="video/*,.mkv"
        name="video"
      />
      <button onClick={handleUpload}>Upload Video</button>
      <button onClick={handleGetShorts}>Get Shorts</button>
      <video
        controls
        src={file ? URL.createObjectURL(file) : undefined}
        className="h-96 m-40 aspect-video`"
      />
    </div>
  );
};

export default Home;
