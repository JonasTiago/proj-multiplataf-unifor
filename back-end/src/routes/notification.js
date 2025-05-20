import express from 'express';
import {
    createNotification,
    getAllNotifications,
    getNotificationById,
    deleteNotification
} from '../controllers/notification.js';

const router = express.Router();

router.post('/', createNotification);
router.get('/', getAllNotifications);
router.get('/:id', getNotificationById);
router.delete('/:id', deleteNotification);

export default router;
