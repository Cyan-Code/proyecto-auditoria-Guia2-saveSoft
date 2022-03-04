import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";
import jwt, { Jwt } from "jsonwebtoken";


export const validarCampos = async (req:Request, resp:Response, next:NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return resp.json(errors)
  }
  next();
}

interface JwtPayload {
  name:string,
  id: string,
  level: string
}

export const validateJWT = (req:Request, resp:Response, next:NextFunction) => {
  const token = req.header('x-token');
  if (!token) {
    return resp.status(401).json({
      state: 'false',
      msg: 'No hay token en la peticion'
    })
  }
  try {
    const {name, id, level} = jwt.verify(token, 'myT0K3M') as JwtPayload;
    req.body.id = id;
    req.body.name = name;
    req.body.level = level;
    next();
  } catch (error) {
    console.log(error);
    return resp.status(401).json({
      msg: 'No autorizado'
    })
  }
}
