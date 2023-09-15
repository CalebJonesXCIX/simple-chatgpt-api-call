"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Run with: npx tsc && node app.js
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const controllers_1 = require("./controllers");
const path = require("path");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000; // Set to 3000
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Load the simple homepage on http://localhost:3000/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// Form action to send a question to the ChatGPT API
app.post("/generate", controllers_1.generateResponse);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
