import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use('/users', userRoutes);
app.use('/projects', ongRoutes);
app.use('/matches', match);
app.use('/notifications', notificationRoutes);
app.use('/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
