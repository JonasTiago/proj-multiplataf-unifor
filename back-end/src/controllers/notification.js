import Notification from '../models/notification.js';

export const createNotification = async (req, res) => {
    try {
        const { message, user_id, ngo_project_id } = req.body;
        const notification = await Notification.create({ message, user_id, ngo_project_id });
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar notificação.' });
    }
};

export const getAllNotifications = async (_req, res) => {
    try {
        const notifications = await Notification.findAll();
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar notificações.' });
    }
};

export const getNotificationById = async (req, res) => {
    try {
        const notification = await Notification.findByPk(req.params.id);
        if (!notification) return res.status(404).json({ error: 'Notificação não encontrada.' });
        res.json(notification);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar notificação.' });
    }
};

export const deleteNotification = async (req, res) => {
    try {
        const notification = await Notification.findByPk(req.params.id);
        if (!notification) return res.status(404).json({ error: 'Notificação não encontrada.' });

        await notification.destroy();
        res.json({ message: 'Notificação excluída com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir notificação.' });
    }
};
