import { Response, Request } from "express";
import { where } from "sequelize/dist";
import db from "../db/connection";
import Student from "../models/students";


export const getStudents = async (req:Request, res:Response) => {
  const students = await Student.findAll();
  res.json({
    students
  })
}

export const postStudent = async (req:Request, res:Response) => {
  const { body } = req;
  try {
    const student = new Student(body);
    await student.save();
    const {name, program, id} = student.toJSON()
    db.query(`call sp_auditProcedure('${name}', '${program}', '${id}', 'fdsa5', 'FDSFAJ', 'FDFVVV');`)//TODO
    return res.json({
      state: 'ok',
      msg: 'usuario grabado exitosamente',
      name,
      program
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Hable con el administrador'
    })
  }
}

