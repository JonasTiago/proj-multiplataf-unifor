import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('food_donation', 'user', 'pass', {
    host: 'postgres', 
    port: 5432,
    dialect: 'postgres'
});

export default sequelize;
