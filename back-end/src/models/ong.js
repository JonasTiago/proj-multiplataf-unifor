import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ong = sequelize.define('ong', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'ong',
    timestamps: false,
});

export default ong;
