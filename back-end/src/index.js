import express from 'express';
import sequelize from './config/db.js';
import userRoutes from './routes/user.js';
import ongRoutes from './routes/ong.js';
import match from './routes/match.js';
import notificationRoutes from './routes/notification.js';
import eventRoutes from './routes/event.js';


const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/projects', ongRoutes);
app.use('/matches', match);
app.use('/notifications', notificationRoutes);
app.use('/events', eventRoutes);


sequelize.sync().then(() => {
    app.listen(3001, () => console.log('User service running on port 3001'));
});
