import { Response, Request } from 'express';
import { deCrypt } from '../helpers/encript';
import User from '../models/user';

export const authentication = async(req:Request, resp:Response) => {
  const {id, password} = req.body;
  try {
    const existeEmail = await User.findOne({
      where: {
        id
      }
    })
    if (!existeEmail) {
      return resp.status(400).json({
        msg: 'Revisa tu Id o contraseña'
      })
    }
    const user = existeEmail.toJSON();
    const validPassword = deCrypt( user.password );
    if (validPassword !== password) {
      return resp.status(400).json({
        msg: 'Id o password incorrectas'
      })
    }
    return resp.json({
      msg: 'ok',
      user
    })
  } catch (error) {
    console.log(error)
    return resp.status(500).json({
      msg: 'Hable con el admin'
    })
  }
}