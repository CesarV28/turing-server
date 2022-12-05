import { DataTypes } from 'sequelize';

import { sequelize } from '../database/config.js';

const Blog = sequelize.define('Blog', {
  // Atributos del modelo
  id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    defaultValue: 'Turing-IA'
  }
}, {
  timestamps: true
});


export {
    Blog
}

