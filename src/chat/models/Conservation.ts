import mongoose, { Schema, Document } from 'mongoose';

export interface Conservation extends Document {
  id: number;
  messages: string[];
}

const ConservationSchema = new Schema({
  id: { type: Number, required: true },
  messages: { type: [String], required: true },
});
const Conservation = mongoose.model('Conservation', ConservationSchema);

export default Conservation;