import express from "express";
import cors from "cors";
import OpenAI from "openai";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {

    try {

        const { message } = req.body;

        const response = await client.responses.create({
            model: "gpt-5.6-luna",
            input: message
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Something went wrong"
        });

    }

});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
