import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {  videoUpload } from "@/utils/uploadVideo";
import { getTranscript } from "@/utils/getTranscript";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), "public", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");
  const uploadPath = path.join(process.cwd(), "public/uploads", filename);
  try {
    await fs.promises.writeFile(
      uploadPath,
      buffer
    );
    
    const fileUploadResponse = await videoUpload(uploadPath, { mimetype: file.type, name: filename });
    console.log(fileUploadResponse);
    
    const transcripts = await getTranscript(fileUploadResponse);
    console.log(transcripts);

    return NextResponse.json({ Message: transcripts, status: 201 });
  } catch (error) {
    console.log("Error occurred ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
}

// {
//       name: "files/ljlxpy7q5uka",
//       displayName: "podcast.mp4",
//       mimeType: "video/mp4",
//       sizeBytes: "59227268",
//       createTime: "2024-12-27T05:13:23.979380Z",
//       updateTime: "2024-12-27T05:13:56.974932Z",
//       expirationTime: "2024-12-29T05:13:23.937809348Z",
//       sha256Hash:
//         "NDg2ZjFhOTBkZTIyMGM1NTYxYjZjYzE4Mzg3MDI4MzFlMGY4YTk2ZTBkOTM5MDk3NTcyY2UyMzdiNGFlODY1Ng==",
//       uri: "https://generativelanguage.googleapis.com/v1beta/files/ljlxpy7q5uka",
//       state: "ACTIVE",
//       videoMetadata: { videoDuration: "1066s" },
//     }
