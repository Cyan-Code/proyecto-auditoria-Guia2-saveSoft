import { Router } from "express";
import {check} from 'express-validator';

import { getStudents, postStudent } from "../controllers/students";
import { idValidate } from "../helpers/db-validators";
import { validarCampos } from "../middlewares/validar-campos";

const router = Router();

router.get('/', getStudents);

router.post('/', [
  check('name', 'El nombre es obligatorio').notEmpty(),
  check('id', 'Id debe existir').notEmpty(),
  check('id').custom( idValidate ),
  check('program', 'El estudiante debe pertenecer a un programa').notEmpty(),
  validarCampos
], postStudent);

export default router;
