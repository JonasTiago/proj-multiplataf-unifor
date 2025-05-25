import express from 'express';
import {
  createMatch,
  getAllMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
} from '../controllers/match.js';

const matchRoutes = express.Router();

matchRoutes.post('/', createMatch);
matchRoutes.get('/', getAllMatches);
matchRoutes.get('/:id', getMatchById);
matchRoutes.put('/:id', updateMatch);
matchRoutes.delete('/:id', deleteMatch);

export default matchRoutes;
