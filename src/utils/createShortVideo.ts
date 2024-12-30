import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export const createShortVideo = async (
  video: File | Blob,
  startTime: string,
  endTime: string,
  videoIndex: number,
  ffmpeg: FFmpeg
): Promise<string> => {
  // console.log(startTime, endTime);
  try {
    if (!video) return "";
    // Convert video to ArrayBuffer
    // console.log(videoIndex);

    // Write video file to FFmpeg virtual filesystem
    await ffmpeg.writeFile((video as File).name, await fetchFile(video));

    // Run FFmpeg command to trim video with max_muxing_queue_size
    await ffmpeg.exec([
      "-i",
      (video as File).name,
      "-ss",
      startTime,
      "-to",
      endTime,
      "-c",
      "copy",
      `${(video as File).name}-${videoIndex}.mp4`,
    ]);

    const dir = await ffmpeg.listDir("/");
    console.log(dir);
    // Read the processed file
    const data = await ffmpeg.readFile(
      `${(video as File).name}-${videoIndex}.mp4`
    );
    // console.log(data);

    // Clean up files from virtual filesystem
    // await ffmpeg.deleteFile("input.mp4");
    // await ffmpeg.deleteFile("output.mp4");

    // Create blob URL for playback

    return URL.createObjectURL(new Blob([data], { type: "video/mp4" }));
  } catch (error) {
    console.error("Error processing video:", error);
    throw error;
  }
};
