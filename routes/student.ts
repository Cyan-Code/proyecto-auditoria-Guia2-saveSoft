import { Router } from "express";
import {check} from 'express-validator';

import { getStudents, postStudent, getAudits } from "../controllers/students";
import { idValidateStudent } from "../helpers/db-validators";
import { validarCampos, validateJWT } from "../middlewares/validar-campos";

const router = Router();

router.get('/', getStudents);

router.get('/audit', getAudits);

router.post('/', [
  check('name', 'El nombre es obligatorio').notEmpty(),
  check('id', 'Id debe existir').notEmpty(),
  check('id').custom( idValidateStudent ),
  check('program', 'El estudiante debe pertenecer a un programa').notEmpty(),
  validarCampos
], postStudent);

export default router;
