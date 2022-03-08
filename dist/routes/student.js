"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const students_1 = require("../controllers/students");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', students_1.getStudents);
router.get('/audit', students_1.getAudits);
router.post('/', [
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id', 'Id debe existir').notEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.idValidateStudent),
    (0, express_validator_1.check)('program', 'El estudiante debe pertenecer a un programa').notEmpty(),
    validar_campos_1.validarCampos
], students_1.postStudent);
exports.default = router;
//# sourceMappingURL=student.js.map