"use server";
import model from "@/gemini/gemini.config";

export async function getVtt(caption: string) {
  try {
    const result = await model.generateContent([
      {
        text: `
                Generate subtitles for the provided caption and create vtt file. It must adhere to the following specifications:

                Caption : ${caption}

                Formatting Requirements:
                Subtitle Header:

                Begin the captions string with WEBVTT\n\n (not vtt\n) as the standard header for WebVTT files.
                Timestamps:

                Ensure subtitles have precise line-by-line timestamps where each line of text corresponds to 1-2 seconds of video.
                Break the text into smaller phrases or individual sentences to align naturally with the dialogue.
                Duration Constraints:
                Align the duration with meaningful video segments (e.g., pauses, topic changes).


                Start with WEBVTT\n\n.
                Include line-by-line timestamps (e.g., 00:00:00.000 --> 00:00:01.500), where each line corresponds to 1-2 seconds of the video.
                Example of the desired format:

                vtt
                WEBVTT

                00:00:00.000 --> 00:00:01.000
                Discipline makes

                00:00:01.001 --> 00:00:02.000
                or breaks a person.

                00:00:02.001 --> 00:00:03.000
                Some people promise themselves

                00:00:03.001 --> 00:00:04.000
                they’ll do something and actually follow through.

                Output Requirements:
                Do not include explanations, additional text, or metadata outside the JSON.
.`,
      },
    ]);
    return result.response.text();
  } catch (error) {
    throw error;
  }
}
