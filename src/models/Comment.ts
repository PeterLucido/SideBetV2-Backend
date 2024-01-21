// models/Comment.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IComment extends Document {
  user: mongoose.Types.ObjectId;
  bet: mongoose.Types.ObjectId;
  text: string;
  date: Date;
  parent: mongoose.Types.ObjectId | null;
  replies: mongoose.Types.ObjectId[];
}

const commentSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bet: { type: mongoose.Schema.Types.ObjectId, ref: 'Bet', required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: null },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

const Comment = mongoose.model<IComment>('Comment', commentSchema);

export default Comment;
