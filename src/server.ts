import express from 'express';
import userRoutes from './routes/userRoutes';
import profileRoutes from './routes/profileRoutes';
import betRoutes from './routes/betRoutes';
import voteRoutes from './routes/voteRoutes';
import '../src/config/database';
import dotenv from 'dotenv';
import commentRoutes from './routes/commentRoutes';
import friendRoutes from './routes/friendRoute';
// import messageRoutes from './routes/messageRoutes';

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
app.use('/api/votes', voteRoutes);
app.use('/api/comments', commentRoutes);
// app.use('/api/messages', messageRoutes);
app.use('/api/friends', friendRoutes);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
