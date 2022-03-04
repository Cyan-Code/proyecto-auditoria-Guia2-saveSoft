"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_auth_1 = require("../middlewares/validar-auth");
const authentication_1 = require("../controllers/authentication");
const router = (0, express_1.Router)();
router.post('/login', [
    (0, express_validator_1.check)('id', 'El id es obligatorio').notEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').notEmpty(),
    validar_auth_1.validarAuth
], authentication_1.authentication);
exports.default = router;
//# sourceMappingURL=authentication.js.map