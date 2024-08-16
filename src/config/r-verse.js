


/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyA_nNqaxBgStW6McktoFLmqRNl909a-1r8";

const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    // Use the model name directly instead of calling getGenerativeModel twice
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text()); // This might need to be result.response.text depending on the API response structure.
    return result.response.text();
}

export default run;
