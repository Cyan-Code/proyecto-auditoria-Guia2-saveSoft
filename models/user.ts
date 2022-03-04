import { DataTypes } from 'sequelize'
import db from '../db/connection'

const User = db.define('user', {
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING
  },
  level: {
    type: DataTypes.ENUM('user', 'admin')
  },
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  }
});

export default User;
