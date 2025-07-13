import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();
const router = express.Router();

// ✅ Set up OpenRouter AI client
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': 'http://localhost:3000', // Change to your frontend URL
    'X-Title': 'AI Trip Planner', // Your app name
  },
});

router.post('/', async (req, res) => {
  const { destination, days, interests, budget, travelers } = req.body;

  // ✅ Validate request body
  if (
    !destination ||
    !days ||
    isNaN(Number(days)) ||
    !budget ||
    isNaN(Number(budget)) ||
    !travelers ||
    isNaN(Number(travelers)) ||
    !interests ||
    !Array.isArray(interests)
  ) {
    return res.status(400).json({
      error: 'Please provide all required trip details in the correct format.',
    });
  }

  // ✅ Strict prompt to enforce budget, group tags, and cost breakdowns
  const prompt = `
Plan a detailed ${days}-day travel itinerary for ${travelers} traveler(s) to ${destination} in India.

💵 Total budget: $${budget} USD for the full group (${travelers} people)

🎯 Interests: ${interests.join(', ')}

📌 Instructions:
- Break each day into Morning / Afternoon / Evening.
- Suggest 2–3 activities per time slot.
- For EACH activity, include:
  - Short description
  - ✅ if it is group-friendly
  - 💰 Estimated cost PER PERSON in USD
- Recommend **budget hotels** (under $40/night)
- Use **local food spots** (under $10/person)
- Use **public/shared transport**
- After each day, include:
  - 💰 Daily Subtotal
  - 💰 Running Total
- DO NOT exceed the total budget.
- DO NOT suggest luxury hotels or expensive restaurants.

🧾 Format clearly using bullet points, headers, and cost breakdowns.
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'anthropic/claude-3-opus', // ✅ Use gpt-4o if available
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    const itinerary = response.choices?.[0]?.message?.content;

    if (!itinerary) {
      return res.status(500).json({ error: 'No itinerary was returned by the AI.' });
    }

    res.json({ itinerary });
  } catch (err) {
    console.error('Error generating itinerary:', err);
    res.status(500).json({
      error: 'Failed to generate itinerary. Please try again later.',
    });
  }
});

export default router;
