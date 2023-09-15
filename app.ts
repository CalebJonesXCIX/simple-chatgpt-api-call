// Run with: npx tsc && node app.js
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { generateResponse } from "./controllers";
import path = require("path");

dotenv.config();

const app = express();
const port = 3000;// Set to 3000
app.use(bodyParser.urlencoded({ extended: true }));

// Load the simple homepage on http://localhost:3000/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Form action to send a question to the ChatGPT API
app.post("/generate", generateResponse);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});