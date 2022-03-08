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
exports.authentication = void 0;
const encript_1 = require("../helpers/encript");
const jwt_1 = require("../helpers/jwt");
const user_1 = __importDefault(require("../models/user"));
const authentication = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, password: passwordBody } = req.body;
    try {
        const existId = yield user_1.default.findOne({
            where: {
                id
            }
        });
        if (!existId) {
            return resp.status(400).json({
                msg: 'Revisa tu Id o contraseña'
            });
        }
        const { password, name, level } = existId.toJSON();
        const validPassword = (0, encript_1.deCrypt)(password);
        if (validPassword !== passwordBody) {
            return resp.status(400).json({
                msg: 'Id o password incorrectos'
            });
        }
        const info = { name, level, id };
        const token = yield (0, jwt_1.generateJWT)({ name, id, level });
        return resp.json({
            msg: 'ok',
            info,
            token
        });
    }
    catch (error) {
        console.log(error);
        return resp.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.authentication = authentication;
//# sourceMappingURL=authentication.js.map