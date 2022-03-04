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
exports.idValidateUser = exports.idValidateStudent = void 0;
const students_1 = __importDefault(require("../models/students"));
const user_1 = __importDefault(require("../models/user"));
const idValidateStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idStudent = yield students_1.default.findOne({ where: { id } });
    if (!!idStudent) {
        throw new Error(`El ${id} ya existe`);
    }
});
exports.idValidateStudent = idValidateStudent;
const idValidateUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const idUser = yield user_1.default.findOne({ where: { id } });
    if (!!idUser) {
        throw new Error(`El ${id} ya existe`);
    }
});
exports.idValidateUser = idValidateUser;
//# sourceMappingURL=db-validators.js.map