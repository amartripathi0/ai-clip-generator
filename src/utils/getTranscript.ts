import model from "@/gemini/gemini.config";
import { FileMetadataResponse } from "@google/generative-ai/server";

export async function getTranscript(file: FileMetadataResponse) {
  try {
    const result = await model.generateContent([
      {
        fileData: {
          mimeType: file.mimeType,
          fileUri: file.uri,
        },
      },
      {
        text: `Write subtitles for the given video in Array and don't use a lot of "\n". Each subtitle  in array should include:
                timestamp: Use the format 6:00, marking video length in minutes / 6 time-intervals for each subtitle.
                content: The dialogue or narration written in Hinglish (a mix of Hindi and English, transliterated).
                viralPotential: Indicate whether the section has the potential to go viral on the internet as true or false.
                Ensure accuracy and natural flow. 
                Do not include anything other than the JSON subtitle output. 
        `,
      },
    ]);
    return result.response.text();
  } catch (error) {
    throw error;
  }
}
