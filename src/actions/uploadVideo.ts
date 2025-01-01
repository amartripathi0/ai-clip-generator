"use server"

import fs from "fs";
import path from "path";
import { videoUpload } from "@/utils/uploadVideo";
import { getTranscript } from "@/utils/getTranscript";

export async function uploadVideo(formData: FormData) {
  try {
    const file = formData.get("file") as File;

    if (!file) {
      return { error: "No files received.", status: 400 };
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Stream the file instead of loading it all into memory
    const chunks = [];
    const reader = file.stream().getReader();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }

    const buffer = Buffer.concat(chunks);
    const filename = file.name.replaceAll(" ", "_");
    const uploadPath = path.join(process.cwd(), "public/uploads", filename);

    // Write file in chunks
    const writeStream = fs.createWriteStream(uploadPath);
    writeStream.write(buffer);
    writeStream.end();

    await new Promise((resolve, reject) => {
      writeStream.on("finish", resolve);
      writeStream.on("error", reject);
    });

    const fileUploadResponse = await videoUpload(uploadPath, {
      mimetype: file.type,
      name: filename,
    });

    const transcripts = await getTranscript(fileUploadResponse);

    // Clean up the temporary file
    fs.unlinkSync(uploadPath);

    return { message: transcripts, status: 201 };
  } catch (error) {
    console.log("Error occurred ", error);
    return { message: "Failed", status: 500 };
  }
}
