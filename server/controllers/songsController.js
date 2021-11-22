import SongsModel from "../models/songsModels.js";
import moongose from 'mongoose';

export const addSong = async (req, res) => {
  const body = req.body;

  const newSong = new SongsModel(body);
  try {
    await newSong.save();

    res.status(200).json(newSong);
  } catch (error) {
    res.status(400).json({ Message: error })
  }

}

export const getSongs = async (_req, res) => {
  try {
    const songs = await SongsModel.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(400).json({ Message: error })
  }
};

export const updateSong = async (req, res) => {
  const { id: _id } = req.params;
  const song = req.body;

  if (!moongose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id do not exist');

  const updatedSong = await SongsModel.findByIdAndUpdate(_id, song, { new: true });

  res.status(200).json(updatedSong);
};

export const deleteSongs = async (req, res) => {
  const { id: _id } = req.params;

  if (!moongose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id do not exist');

  SongsModel.findByIdAndDelete(_id);

  res.status(200).json({ message: 'Song deleted!' })
}
