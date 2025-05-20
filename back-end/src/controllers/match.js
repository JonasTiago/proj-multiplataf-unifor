import VolunteerProjectMatch from '../models/match.js';

export const createMatch = async (req, res) => {
    try {
        const { userId, projectId, interest } = req.body;
        const match = await VolunteerProjectMatch.create({ userId, projectId, interest });
        res.status(201).json(match);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar match.' });
    }
};

export const getAllMatches = async (_req, res) => {
    try {
        const matches = await VolunteerProjectMatch.findAll();
        res.json(matches);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar matches.' });
    }
};

export const getMatchById = async (req, res) => {
    try {
        const match = await VolunteerProjectMatch.findByPk(req.params.id);
        if (!match) return res.status(404).json({ error: 'Match não encontrado.' });
        res.json(match);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar match.' });
    }
};

export const updateMatch = async (req, res) => {
    try {
        const match = await VolunteerProjectMatch.findByPk(req.params.id);
        if (!match) return res.status(404).json({ error: 'Match não encontrado.' });

        const { interest, status } = req.body;
        await match.update({ interest, status });
        res.json(match);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar match.' });
    }
};

export const deleteMatch = async (req, res) => {
    try {
        const match = await VolunteerProjectMatch.findByPk(req.params.id);
        if (!match) return res.status(404).json({ error: 'Match não encontrado.' });

        await match.destroy();
        res.json({ message: 'Match excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir match.' });
    }
};
