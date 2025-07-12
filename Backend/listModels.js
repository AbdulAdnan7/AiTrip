import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  try {
    // List all available models your API key can access
    const models = await genAI.listModels();
    console.log("Available models:");
    models.forEach(model => console.log(model.name));
  } catch (err) {
    console.error("Error listing models:", err);
  }
}

listModels();
