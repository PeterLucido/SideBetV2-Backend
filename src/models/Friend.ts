// models/Friend.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IFriend extends Document {
  requester: mongoose.Types.ObjectId;
  recipient: mongoose.Types.ObjectId;
  status: string;
}

const friendSchema: Schema = new Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['requested', 'accepted', 'rejected', 'blocked'],
    required: true
  }
}, { timestamps: true });

const Friend = mongoose.model<IFriend>('Friend', friendSchema);

export default Friend;
