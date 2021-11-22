import mongoose from 'mongoose';
const { Schema } = mongoose;

const songsSchema = new Schema({
  song: String,
  artist: String, 
  url: String,
  image: String,
});

const SongsModel = mongoose.model('SongsModel', songsSchema);

export default SongsModel;
