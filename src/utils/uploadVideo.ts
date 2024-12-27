import { GoogleAIFileManager, FileState } from "@google/generative-ai/server";

const API_KEY = process.env.GEMINI_API_KEY || "";
export const fileManager = new GoogleAIFileManager(
  API_KEY
);

export async function videoUpload(path: string, videoData: { mimetype: string; name: string }) {
  try {    
    const uploadResponse = await fileManager.uploadFile(path, {
      mimeType: videoData.mimetype || "video/mp4", 
      displayName: videoData.name,
    });
    const name = uploadResponse.file.name;
    let file = await fileManager.getFile(name);
    while (file.state === FileState.PROCESSING) {
      process.stdout.write(".");
      await new Promise((res) => setTimeout(res, 10000)); // check every 10 seconds
      file = await fileManager.getFile(name);
    }
    if (file.state === FileState.FAILED) {
      throw new Error("Video processing failed");
    }
    return file; 
  } catch (error) {
    throw error;
  }
}
