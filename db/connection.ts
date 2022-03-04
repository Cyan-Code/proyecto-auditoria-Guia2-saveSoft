import { Sequelize } from 'sequelize'

const db = new Sequelize('auditoria', 'root', 'Mypoopsql.co!', {
  host:'localhost',
  dialect:'mysql'
});


  /* db.query(
    'DROP TRIGGER auditTrigger;'
  ) */

  /* db.query(
    'CREATE TRIGGER auditTrigger AFTER INSERT ON students' +
    ' FOR EACH ROW' +
    ' BEGIN' +
    ' insert into audit (name, program, level, idStudent) values (new.name, new.program, new.level, new.id);' +
    'END;'
  ) */

export default db;