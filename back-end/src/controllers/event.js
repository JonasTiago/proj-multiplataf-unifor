import Event from '../models/event.js';

export const createEvent = async (req, res) => {
    try {
        const { title, date, location, ngo_project_id } = req.body;
        const event = await Event.create({ title, date, location, ngo_project_id });
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar evento.' });
    }
};

export const getAllEvents = async (_req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar eventos.' });
    }
};

export const getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).json({ error: 'Evento não encontrado.' });
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar evento.' });
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).json({ error: 'Evento não encontrado.' });

        await event.destroy();
        res.json({ message: 'Evento excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir evento.' });
    }
};
