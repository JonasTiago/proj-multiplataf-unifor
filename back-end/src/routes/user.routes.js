import {
  create,
  deleteUser,
  findAll,
  findById,
  login,
  update,
} from '../controllers/user.controller.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', findAll);
userRouter.post('/register', create);
userRouter.get('/:id', findById);
userRouter.delete('/:id', deleteUser);
userRouter.put('/id', update);
userRouter.post('/login', login);

export default userRouter;
