import ong from '../models/ong.js';

export const createProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const project = await ong.create({ name, description });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar projeto.' });
    }
};

export const getAllProjects = async (_req, res) => {
    try {
        const projects = await ong.findAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar projetos.' });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const project = await ong.findByPk(req.params.id);
        if (!project) return res.status(404).json({ error: 'Projeto não encontrado.' });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar projeto.' });
    }
};

export const

    updateProject = async (req, res) => {
    try {
        const project = await ong.findByPk(req.params.id);
        if (!project) return res.status(404).json({ error: 'Projeto não encontrado.' });

        const { name, description } = req.body;
        await project.update({ name, description });
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar projeto.' });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const project = await ong.findByPk(req.params.id);
        if (!project) return res.status(404).json({ error: 'Projeto não encontrado.' });

        await project.destroy();
        res.json({ message: 'Projeto excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir projeto.' });
    }
};
