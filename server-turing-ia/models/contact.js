import { DataTypes } from 'sequelize';

import { sequelize } from '../database/config.js';

const Contact = sequelize.define('Contact', {
  // Atributos del modelo
  id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
  },
  job: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true
});


export {
    Contact
}

