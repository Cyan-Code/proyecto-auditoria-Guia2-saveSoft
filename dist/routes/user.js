"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_1 = require("../controllers/users");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsers);
//router.get('/:id',  getUsuario);
router.post('/', [
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').notEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').notEmpty(),
    (0, express_validator_1.check)('level', 'No es un rol permitido').isIn(['user', 'admin']),
    //check('email', 'El email es obligatorio').notEmpty(),
    validar_campos_1.validarCampos
], users_1.postUsuario);
/* router.put('/:id',[
  check('nombre', 'El nombre es obligatorio').notEmpty(),
  check('password', 'La contraseña es obligatoria').notEmpty(),
  check('email', 'Email en incorrecto formato').isEmail(),
  validarCampos
], updatedUsuario);

router.delete('/:id',  deleteUsuario);

router.delete('/',[
  check('confirmar', 'Debe de tener una confirmacion valida').toBoolean().equals('true')
],deleteAllUsers); */
exports.default = router;
//# sourceMappingURL=user.js.map