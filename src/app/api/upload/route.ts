// route.ts
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { videoUpload } from "@/utils/uploadVideo";
import { getTranscript } from "@/utils/getTranscript";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60; // Increased to 5 minutes 


const uploadDir = path.join(process.cwd(), "tmp", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req: NextRequest) {
  try {
    // Check if the request is multipart
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 400 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No files received." },
        { status: 400 }
      );
    }

    // Generate a unique filename to prevent collisions
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.name.replace(/\s+/g, "_").toLowerCase();
    const uniqueFilename = `${path.parse(filename).name}-${uniqueSuffix}${path.parse(filename).ext}`;
    const uploadPath = path.join(uploadDir, uniqueFilename);

    // Create write stream
    const writeStream = fs.createWriteStream(uploadPath);

    // Process the file in chunks
    const reader = file.stream().getReader();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      writeStream.write(value);
    }

    await new Promise((resolve) => writeStream.on("finish", resolve));

    try {
      const fileUploadResponse = await videoUpload(uploadPath, {
        mimetype: file.type,
        name: uniqueFilename,
      });

      const transcripts = await getTranscript(fileUploadResponse);

      // Clean up
      fs.unlinkSync(uploadPath);

      return NextResponse.json({
        message: "Upload successful",
        transcripts,
        status: 201,
      });
    } catch (error) {
      // Clean up on error
      fs.unlinkSync(uploadPath);
      throw error;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({
      message: error instanceof Error ? error.message : "Upload failed",
      status: 500,
    });
  }
}
