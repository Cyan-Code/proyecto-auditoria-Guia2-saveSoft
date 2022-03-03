import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Student = db.define('student', {
  name: {
    type: DataTypes.STRING,
  },
  program: {
    type: DataTypes.STRING
  },
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  }
});

export default Student;