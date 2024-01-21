import mongoose, { Schema, Document } from 'mongoose';

enum BetStatus {
  Open = "open",
  Closed = "closed",
  Settled = "settled"
}

interface IBet extends Document {
  description: string;
  date: Date;
  profile1: mongoose.Types.ObjectId;  // Reference to Profile
  profile2: mongoose.Types.ObjectId;  // Reference to Profile
  status: BetStatus;
  comments: mongoose.Types.ObjectId[];
  votes: mongoose.Types.ObjectId[];
  amount: number;
  winner: mongoose.Types.ObjectId | null;  // Reference to Profile
  loser: mongoose.Types.ObjectId | null;   // Reference to Profile
}

const betSchema: Schema = new Schema({
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  profile1: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  profile2: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  status: { type: String, enum: Object.values(BetStatus), default: BetStatus.Open },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vote' }],
  amount: { type: Number, required: true },
  winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', default: null },
  loser: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', default: null }
}, { timestamps: true });

const Bet = mongoose.model<IBet>('Bet', betSchema);

export default Bet;
