import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const match = sequelize.define('match', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    interest: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('pendente', 'aceito', 'recusado'),
        defaultValue: 'pendente'
    }
});

export default match;
