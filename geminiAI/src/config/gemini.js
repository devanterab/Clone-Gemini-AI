import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDBBrhCK33iSPdt8RXJF6ev_6pPBthW57w";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(result.response.text());
  return response.text();
}

run();

export default run;
