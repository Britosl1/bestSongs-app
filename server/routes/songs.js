import express from 'express'

import { getSongs, addSong, deleteSongs, updateSong } from '../controllers/songsController.js';

const router = express.Router();

router.post('/songs', addSong);
router.get('/songs', getSongs);
router.put('/songs/:id', updateSong);
router.delete('/songs/:id', deleteSongs);

export default router;
