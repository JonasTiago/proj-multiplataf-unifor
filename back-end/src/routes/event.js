import express from 'express';
import {
    createEvent,
    getAllEvents,
    getEventById,
    deleteEvent
} from '../controllers/event.js';

const router = express.Router();

router.post('/', createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.delete('/:id', deleteEvent);

export default router;
