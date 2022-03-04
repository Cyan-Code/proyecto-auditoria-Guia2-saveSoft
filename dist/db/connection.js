"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('auditoria', 'root', 'Mypoopsql.co!', {
    host: 'localhost',
    dialect: 'mysql'
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
exports.default = db;
//# sourceMappingURL=connection.js.map