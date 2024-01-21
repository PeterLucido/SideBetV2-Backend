// models/Vote.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IVote extends Document {
  user: mongoose.Types.ObjectId;
  bet: mongoose.Types.ObjectId;
  value: number; // Assuming value is for upvote or downvote, etc.
  date: Date;
}

const voteSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bet: { type: mongoose.Schema.Types.ObjectId, ref: 'Bet', required: true },
  value: { type: Number, required: true },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

const Vote = mongoose.model<IVote>('Vote', voteSchema);

export default Vote;
