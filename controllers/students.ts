import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import db from "../db/connection";
import Audit from "../models/audit";
import Student from "../models/students";

interface JwtPayload {
  name:string,
  id: string,
  level: string
}

export const getAudits = async (req:Request, res:Response) => {
  const audits = await Audit.findAll();
  res.json({
    audits
  })
}

export const getStudents = async (req:Request, res:Response) => {
  const students = await Student.findAll();
  res.json({
    students
  })
}

export const postStudent = async (req:Request, res:Response) => {
  const { body } = req;
  const token = req.header('x-token');
  if (!token) {
    return res.status(404).json({
      msg:'No tiene token en la peticion'
    })
  }
  try {
    const {name:nameAdmin, id:idAdmin, level:levelAdmin} = jwt.verify(token, 'myT0K3M') as JwtPayload;
    if (levelAdmin !== 'admin') {
      return res.status(404).json({
        msg: 'No tiene permisos necesarios'
      })
    }
    const student = new Student(body);
    await student.save();
    const {name, program, id} = student.toJSON();
    const info = {name, program, id};
    db.query(`call sp_auditProcedure('${name}', '${program}', 'student', '${id}', '${idAdmin}', '${nameAdmin}');`);
    return res.json({
      state: 'ok',
      msg: 'usuario grabado exitosamente',
      info
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Hable con el administrador'
    })
  }
}

