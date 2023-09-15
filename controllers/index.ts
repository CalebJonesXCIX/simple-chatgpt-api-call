import OpenAI from 'openai';
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY// The following API key provided by account details on OpenAI
});

// Controller function to handle chat conversation
export const generateResponse = async (req: Request, res: Response) => {
    try {
        const questionInput = JSON.stringify(req.body.questionInput);

        const result = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": questionInput }],
        });

        const responseMessage = result['choices'][0]['message']['content'];

        const messageHtml =
            `<html>
                <h1>ChatGPT says:</h1>
                <p>${responseMessage}</p>
                <p><a href="/">Ask another question?</a></p>
            </html>`;

        res.send(messageHtml);
    } catch (e) {
        console.error(e);
    }
};