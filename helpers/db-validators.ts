import Student from "../models/students";
import User from "../models/user";


export const idValidateStudent = async ( id:string ) => {
  const idStudent = await Student.findOne({where:{id}})
  if (!!idStudent) {
    throw new Error(`El ${id} ya existe`);
  }
}

export const idValidateUser = async (id:string) => {
  const idUser = await User.findOne({where:{id}})
  if (!!idUser){
    throw new Error(`El ${id} ya existe`);
  }
}
