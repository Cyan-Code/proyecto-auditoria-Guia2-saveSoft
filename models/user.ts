import { DataTypes, ENUM } from 'sequelize'
import db from '../db/connection'

const User = db.define('user', {
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING
  },
  level: {
    type: DataTypes.ENUM('user', 'admin', 'student')
  }
});

export default User;
