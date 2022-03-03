import { Response, Request } from "express";
import { where } from "sequelize/dist";
import Student from "../models/students";


export const getStudents = async (req:Request, res:Response) => {
  const students = await Student.findAll();
  res.json({
    students
  })
}

export const postStudent = async (req:Request, res:Response) => {
  const { body } = req;
  const { name, program } = body;
  try {
    const student = new Student(body);
    await student.save();
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

