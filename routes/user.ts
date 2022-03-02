import { Router } from "express";
import {check} from 'express-validator';

import {
  //deleteAllUsers,
  //deleteUsuario,
  //getUsuario,
  getUsers,
  postUsuario,
  //updatedUsuario
} from "../controllers/usuarios";

import { validarCampos } from "../middlewares/validar-campos";

const router = Router();

router.get('/', getUsers);
//router.get('/:id',  getUsuario);

router.post('/', [
  check('name', 'El nombre es obligatorio').notEmpty(),
  check('password', 'La contraseña es obligatoria').notEmpty(),
  check('level', 'No es un rol permitido').isIn(['user', 'admin', 'student']),
  //check('email', 'El email es obligatorio').notEmpty(),
  validarCampos
], postUsuario);

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

export default router;