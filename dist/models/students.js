"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Student = connection_1.default.define('student', {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    program: {
        type: sequelize_1.DataTypes.STRING
    },
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    }
});
exports.default = Student;
//# sourceMappingURL=students.js.map