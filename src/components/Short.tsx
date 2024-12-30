"use client";
import { createShortVideo } from "@/utils/createShortVideo";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import React, { useEffect, useState } from "react";

interface ShortProps {
  videoIndex: number;
  start: string;
  end: string;
  video: File;
  content: string;
}

const Short = React.forwardRef<FFmpeg, ShortProps>(
  ({ start, end, video, videoIndex, content }, ref) => {
    const [vid, setVid] = useState("");
    const [vttUrl, setVttUrl] = useState("");
    const ffmpeg = ref as React.MutableRefObject<FFmpeg | null>;
    console.log(content);

    useEffect(() => {
      async function processVideo() {
        if (ffmpeg?.current == null) return;

        const videoFile = await createShortVideo(
          video,
          start,
          end,
          videoIndex,
          ffmpeg.current
        );
        if (videoFile) setVid(videoFile);
      }
      processVideo();
    }, [ffmpeg, start, end, video]);

    useEffect(() => {
      // Calculate total duration in seconds
      const startSeconds = parseInt(start);
      const endSeconds = parseInt(end);
      const duration = endSeconds - startSeconds;

      // Split content into words
      const words = content.split(" ");
      const wordsPerSegment = Math.ceil(words.length / (duration / 2)); // Show new caption every 2 seconds

      // Create VTT content
      let vttContent = "WEBVTT\n\n";

      for (let i = 0; i < words.length; i += wordsPerSegment) {
        const segmentWords = words.slice(i, i + wordsPerSegment);
        const startTime = (i / wordsPerSegment) * 2;
        const endTime = Math.min((i / wordsPerSegment + 1) * 2, duration);

        const formatTime = (seconds: number) => {
          const pad = (num: number) => num.toString().padStart(2, "0");
          const mins = Math.floor(seconds / 60);
          const secs = Math.floor(seconds % 60);
          const ms = Math.floor((seconds % 1) * 1000);
          return `${pad(mins)}:${pad(secs)}.${ms.toString().padStart(3, "0")}`;
        };

        vttContent += `${formatTime(startTime)} --> ${formatTime(endTime)}\n`;
        vttContent += `${segmentWords.join(" ")}\n\n`;
      }

      const vttBlob = new Blob([vttContent], { type: "text/vtt" });
      const vttUrl = URL.createObjectURL(vttBlob);
      setVttUrl(vttUrl);

      return () => URL.revokeObjectURL(vttUrl);
    }, [content, start, end]);

    return (
      <div className="relative">
        <video controls src={vid} className="h-48 aspect-video rounded-lg">
          <track default kind="subtitles" srcLang="en" src={vttUrl} />
        </video>
      </div>
    );
  }
);

Short.displayName = "Short";

export default Short;
