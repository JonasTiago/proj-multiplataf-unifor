import express from 'express';
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from '../controllers/ong.js';

const ongRoutes = express.Router();

ongRoutes.post('/', createProject);
ongRoutes.get('/', getAllProjects);
ongRoutes.get('/:id', getProjectById);
ongRoutes.put('/:id', updateProject);
ongRoutes.delete('/:id', deleteProject);

export default ongRoutes;
