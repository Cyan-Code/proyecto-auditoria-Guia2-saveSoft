import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validarCampos = async (req:Request, resp:Response, next:NextFunction) => {
  //TODO: Requerimos token de acceso
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return resp.json(errors)
  }
  next();
}
