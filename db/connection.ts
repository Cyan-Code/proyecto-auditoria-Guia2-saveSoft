import { Sequelize } from 'sequelize'

const db = new Sequelize('auditoria', 'root', 'Mypoopsql.co!', {
  host:'localhost',
  dialect:'mysql'
});

export default db;