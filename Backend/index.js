//Importing required packages
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


//import the Gemini-powered route
import plannerRoute from './routes/plannerRoute.js'

//Load environment variables from .env files
dotenv.config();

//Initialize the Express App
const app = express()

//Enable Cross-Origin Resource Sharing to allow frontend requests
app.use(cors());

//Middleware to parese incoming JSON requests
app.use(express.json());

//Connect planner route to handle trip planning
app.use('/api/plan-trip', plannerRoute)
//Define the port number (using .env PORT if available, else 5000)
const PORT = process.env.PORT || 5000;

//Starting the Server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`)
})
