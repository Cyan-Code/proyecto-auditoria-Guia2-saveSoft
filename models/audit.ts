import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Audit = db.define('audit', {
  name: {
    type: DataTypes.STRING,
  },
  program: {
    type: DataTypes.STRING
  },
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  level: {
    type: DataTypes.STRING
  },
  idStudent: {
    type: DataTypes.STRING
  },
  idAdmin: {
    type: DataTypes.STRING
  },
  nameAdmin: {
    type: DataTypes.STRING
  }
});

export default Audit;
