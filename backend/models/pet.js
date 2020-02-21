import mongoose from 'mongoose';

const petModel = new mongoose.Schema({
  name: { type: String },
  lastPoop: Date, // deprecated
  poops: [{ type: Date, default: Date.now }]
});

export default mongoose.model('pets', petModel);
