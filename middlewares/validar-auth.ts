import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validarAuth = async (req:Request, resp:Response, next:NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return resp.json(errors)
  }
  next();
}
