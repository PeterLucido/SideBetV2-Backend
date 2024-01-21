// models/Notification.ts
import mongoose, { Schema, Document } from 'mongoose';

interface INotification extends Document {
  user: mongoose.Types.ObjectId;
  message: string;
  read: boolean;
  relatedBet: mongoose.Types.ObjectId;
}

const notificationSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  relatedBet: { type: mongoose.Schema.Types.ObjectId, ref: 'Bet' }
}, { timestamps: true });

const Notification = mongoose.model<INotification>('Notification', notificationSchema);

export default Notification;
