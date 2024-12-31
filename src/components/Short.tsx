"use client";
import { createShortVideo } from "@/utils/createShortVideo";
import { getVtt } from "@/actions/getVtt";
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
    const ffmpeg = ref as React.MutableRefObject<FFmpeg | null>;
    const [vttUrl, setVttUrl] = useState("");
    const [loading, setLoading] = useState(true); // Fixed variable name

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
      async function getSubtitles() {
        const resp = await getVtt(content);
        if (resp) {
          // Create blob URL from same origin
          const vttBlob = new Blob([resp], { type: "text/vtt" });
          const newVttUrl = URL.createObjectURL(vttBlob);
          setVttUrl(newVttUrl);
          setLoading(false); // Fixed variable name
        }
        setLoading(false); // Fixed variable name
      }
      getSubtitles();

      return () => {
        if (vttUrl) {
          URL.revokeObjectURL(vttUrl);
        }
      };
    }, [content]);

    return (
      <div className="relative">
        {loading ? (
          <p className="text-neutral-400">Fetching captions...</p>
        ) : (
          <video controls src={vid} className="h-52 aspect-video rounded-lg">
            {vttUrl && (
              <track
                className="text-3xl font-extrabold text-pink-500 animate-bounce"
                default
                kind="captions"
                srcLang="en"
                src={vttUrl}
              />
            )}
          </video>
        )}
      </div>
    );
  }
);

Short.displayName = "Short";

export default Short;
