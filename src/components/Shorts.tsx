"use client";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import Short from "./Short";
import { useEffect, useRef, useState } from "react";
import { toBlobURL } from "@ffmpeg/util";

export default function Shorts({
  transcript,
  video,
}: {
  video: File;
  transcript: {
    start: string;
    end: string;
    content: string;
    viralPotential: string;
  }[];
}) {
  const ffmpegRef = useRef<FFmpeg | null>(null);
  const [ffmpegLoad, setFfmpegLoad] = useState(false);
  async function loadFFmpeg() {
    try {
      const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
      const ffmpeg = new FFmpeg();
      ffmpegRef.current = ffmpeg;

      //   ffmpeg.on('log', ({message}) => {
      //     console.log(message);
      //   })

      const isLoaded = await ffmpeg.load({
        coreURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.js`,
          "text/javascript"
        ),
        wasmURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.wasm`,
          "application/wasm"
        ),
      });

      if (isLoaded) setFfmpegLoad(true);
    } catch (error) {
      console.log(error);
    }
  }

  function formatTimestamp(time: string) {
    const [minutes, seconds] = time.split(":").map(Number);
    const totalSeconds = minutes * 60 + seconds;
    return totalSeconds.toString();
  }
  console.log(transcript.filter((clip) => Number(clip.viralPotential) >= 0.5));
  
  useEffect(() => {
    loadFFmpeg();
  }, []);
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-neutral-900">
      {transcript
        .filter((clip) => Number(clip.viralPotential) >= 0.5)
        .map((clip, index) => (
          <div key={clip.start}>
            {ffmpegLoad && (
              <Short
                videoIndex={index + 1}
                start={formatTimestamp(clip.start)}
                end={formatTimestamp(clip.end)}
                video={video}
                ref={ffmpegRef}
                content={clip.content}
              />
            )}
          </div>
        ))}
    </div>
  );
}
