import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
// Connect to MongoDB
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

mongoose
  .connect(uri)
  .then(() => console.log(`Connected to MongoDB`))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
