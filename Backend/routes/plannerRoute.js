//importing required packages
import express from 'express'
import dotenv from 'dotenv';
import { OpenAI } from 'openai/client.js';

//Load environmnet variables from .env file
dotenv.config();

//creating a new express router instance
const router = express.Router();

//Initialize OpenAi client conifgured to use OpenRouter API
const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1', //OpenRouter Api base url
    apiKey: process.env.OPENROUTER_API_KEY, //OpenRouter api key from env
    defaultHeaders: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`, //Auth header required by Openai
    },
});


router.post('/', async (res, req) => {
    //Extract destination, days, and intersets from incoming request body
    const {destination, days, interests} = req.body;

    //Construct a prompt string to instruct the AI what to generate
    const prompt = `Plain a ${days}-day trip to ${destination} focused on ${interests.join(', ')}`

    try  {

    
    //send the prompt to OpenRouter's chat completion endpoint
    const response = await openai.chat.completions.create({
        model: 'mistralai/mistral-7b-instruct', //OpenRouter model Id
        messages: [{role: 'user' , content: prompt}], //The conversion messages array
        temperature: 0.7, //Controls creativity of the response (0-1)
    });

    //Extract generated itinerary text from response
    const itinerary = response.choices[0].message.content

    //Send itinerary back to client as JSON
    res.json({itinerary});

     } catch (err) {
        console.error('OpenRouter API error: ', err);
        res.status(500).json({ error: err.message || 'Failed to generate itinerary'})
     }

});


export default router;