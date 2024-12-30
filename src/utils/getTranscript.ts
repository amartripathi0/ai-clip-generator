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
        text: `Generate subtitles for the provided video in JSON array format. Each subtitle entry must strictly adhere to the following specifications:

Duration:

Each subtitle should represent a part of the video that is at least 30 seconds and not more than 59 seconds long.
Choose sections with exact starting and ending timestamps in mm:ss format, ensuring they align naturally with the video's context.
Selection Criteria:

Focus on sections with high potential to go viral on the internet based on their content.
Structure: Each subtitle entry must include:

start: The starting timestamp of the subtitle in mm:ss format.
end: The ending timestamp of the subtitle in mm:ss format.
content: The dialogue or narration written in Hinglish (a natural blend of Hindi and English, transliterated accurately).
viralPotential: A numeric probability value between 0 and 1, reflecting the likelihood of the section going viral on the internet.
Language and Accuracy:

Transcribe the dialogue or narration accurately from the video as it is.
Output Requirement:

Return only the JSON array of subtitles.
Do not include any additional text, explanations, or metadata outside of the JSON format.
Ensure the output captures viral-worthy moments while meeting the duration constraints.`,
      },
    ]);
    return result.response.text();
  } catch (error) {
    throw error;
  }
}
