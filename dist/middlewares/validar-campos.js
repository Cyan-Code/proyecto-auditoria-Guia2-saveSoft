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
exports.validateJWT = exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarCampos = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return resp.json(errors);
    }
    next();
});
exports.validarCampos = validarCampos;
const validateJWT = (req, resp, next) => {
    const token = req.header('x-token');
    if (!token) {
        return resp.status(401).json({
            state: 'false',
            msg: 'No hay token en la peticion'
        });
    }
    try {
        const { name, id, level } = jsonwebtoken_1.default.verify(token, 'myT0K3M');
        req.body.id = id;
        req.body.name = name;
        req.body.level = level;
        next();
    }
    catch (error) {
        console.log(error);
        return resp.status(401).json({
            msg: 'No autorizado'
        });
    }
};
exports.validateJWT = validateJWT;
//# sourceMappingURL=validar-campos.js.map