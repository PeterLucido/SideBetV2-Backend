// models/Profile.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IProfile extends Document {
  user: mongoose.Types.ObjectId; // Add this line
  name: string;
  photo: string;
  bet: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  votes: mongoose.Types.ObjectId[];
  friends: mongoose.Types.ObjectId[];
}

const profileSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Add this line
  name: { type: String, required: true },
  photo: { type: String, required: false },
  bet: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bet' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vote' }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Profile = mongoose.model<IProfile>('Profile', profileSchema);

export default Profile;
