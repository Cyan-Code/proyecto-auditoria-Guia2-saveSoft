"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Audit = connection_1.default.define('audit', {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    program: {
        type: sequelize_1.DataTypes.STRING
    },
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    level: {
        type: sequelize_1.DataTypes.STRING
    },
    idStudent: {
        type: sequelize_1.DataTypes.STRING
    },
    idAdmin: {
        type: sequelize_1.DataTypes.STRING
    },
    nameAdmin: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Audit;
//# sourceMappingURL=audit.js.map