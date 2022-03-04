"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postStudent = exports.getStudents = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const connection_1 = __importDefault(require("../db/connection"));
const students_1 = __importDefault(require("../models/students"));
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield students_1.default.findAll();
    res.json({
        students
    });
});
exports.getStudents = getStudents;
const postStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const token = req.header('x-token');
    if (!token) {
        return res.status(404).json({
            msg: 'No tiene token en la peticion'
        });
    }
    try {
        const { name: nameAdmin, id: idAdmin, level: levelAdmin } = jsonwebtoken_1.default.verify(token, 'myT0K3M');
        if (levelAdmin !== 'admin') {
            return res.status(404).json({
                msg: 'No tiene permisos necesarios'
            });
        }
        const student = new students_1.default(body);
        yield student.save();
        const { name, program, id } = student.toJSON();
        connection_1.default.query(`call sp_auditProcedure('${name}', '${program}', 'student', '${id}', '${idAdmin}', '${nameAdmin}');`);
        return res.json({
            state: 'ok',
            msg: 'usuario grabado exitosamente',
            name,
            program
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postStudent = postStudent;
//# sourceMappingURL=students.js.map