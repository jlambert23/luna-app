import mongoose from 'mongoose';

const petModel = new mongoose.Schema({
  title: { type: String },
  lastPoop: { type: Date }
});

export default mongoose.model('pets', petModel);
