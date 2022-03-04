import { Response, Request } from 'express';
import { deCrypt } from '../helpers/encript';
import { generateJWT } from '../helpers/jwt';
import User from '../models/user';

interface userDB {
  password: string,
  name: string,
  level: string
}

export const authentication = async(req:Request, resp:Response) => {
  const {id, password:passwordBody} = req.body;
  try {
    const existId = await User.findOne({
      where: {
        id
      }
    })
    if (!existId) {
      return resp.status(400).json({
        msg: 'Revisa tu Id o contraseña'
      })
    }
    const { password, name, level } = existId.toJSON() as userDB;
    const validPassword = deCrypt( password );
    if (validPassword !== passwordBody) {
      return resp.status(400).json({
        msg: 'Id o password incorrectos'
      })
    }
    const token = await generateJWT({name, id, level})
    return resp.json({
      msg: 'ok',
      token
    })
  } catch (error) {
    console.log(error)
    return resp.status(500).json({
      msg: 'Hable con el admin'
    })
  }
}