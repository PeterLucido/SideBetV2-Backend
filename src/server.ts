import express from 'express';
import userRoutes from './routes/userRoutes';
import profileRoutes from './routes/profileRoutes';
import betRoutes from './routes/betRoutes';
import '../src/config/database';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware for JSON body parsing
app.use(express.json());

// Define your API routes and controllers here
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/bets', betRoutes);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
