import express from 'express';
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
} from '../controllers/event.js';

const eventRoutes = express.Router();

eventRoutes.post('/', createEvent);
eventRoutes.get('/', getAllEvents);
eventRoutes.get('/:id', getEventById);
eventRoutes.delete('/:id', deleteEvent);

export default eventRoutes;
