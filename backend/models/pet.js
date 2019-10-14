import mongoose from 'mongoose';

const petModel = new mongoose.Schema({
  name: { type: String },
  lastPoop: { type: Date }
});

export default mongoose.model('pets', petModel);
