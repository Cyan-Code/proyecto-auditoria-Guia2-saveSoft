"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (payload) => {
    return new Promise((resolve, reject) => {
        const { id, level, name } = payload;
        jsonwebtoken_1.default.sign({ id, level, name }, 'myT0K3M', { expiresIn: '24h' }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se genero el JWT');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=jwt.js.map