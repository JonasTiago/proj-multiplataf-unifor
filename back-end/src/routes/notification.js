import express from 'express';
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  deleteNotification,
} from '../controllers/notification.js';

const notificationRoutes = express.Router();

notificationRoutes.post('/', createNotification);
notificationRoutes.get('/', getAllNotifications);
notificationRoutes.get('/:id', getNotificationById);
notificationRoutes.delete('/:id', deleteNotification);

export default notificationRoutes;
