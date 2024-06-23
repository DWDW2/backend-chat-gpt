import mongoose, { Schema, Document } from 'mongoose';

export interface Conservation extends Document {
  id: number;
  messages: string[];
}

const ConservationSchema = new Schema({
  messages: [
    {
      sent: {type: String},
      message:{type:String}
    }
  ]
});
const Conservation = mongoose.model('Conservation', ConservationSchema);

export default Conservation;