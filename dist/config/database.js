"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
// Connect to MongoDB
const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
}
mongoose_1.default
    .connect(uri)
    .then(() => console.log(`Connected to MongoDB at ${uri}`))
    .catch(err => console.error('Error connecting to MongoDB:', err));
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
