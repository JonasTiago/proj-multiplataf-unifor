import express from 'express';
import cors from 'cors';
import eventRoutes from './routes/event.js';
import userRoutes from './routes/user.js';
import ongRoutes from './routes/ong.js';
import matchRoutes from './routes/match.js';
import notificationRoutes from './routes/notification.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/projects', ongRoutes);
app.use('/matches', matchRoutes);
app.use('/notifications', notificationRoutes);
app.use('/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
