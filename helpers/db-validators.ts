import Student from "../models/students";


export const idValidate = async ( id:string ) => {
  const idStudent = await Student.findOne({where:{id}})
  if (!!idStudent) {
    throw new Error(`El ${id} ya existe`);
  }
}
