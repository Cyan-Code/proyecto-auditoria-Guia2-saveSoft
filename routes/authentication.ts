import { Router } from "express";
import { check } from 'express-validator';
import { validarAuth } from "../middlewares/validar-auth";
import { authentication } from "../controllers/authentication";

const router = Router();

router.post('/login',[
  check('id', 'El id es obligatorio').notEmpty(),
  check('password', 'La contraseña es obligatoria').notEmpty(),
  validarAuth
], authentication);

export default router;
