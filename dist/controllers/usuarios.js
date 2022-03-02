"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUsuario = exports.getUsers = void 0;
//import { validationResult } from "express-validator";
const encript_1 = require("../helpers/encript");
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json({
        users
    });
});
exports.getUsers = getUsers;
/* export const getUsuario = async (req:Request, res:Response) => {
  
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  if (usuario) {
    return res.json(usuario)
  } else {
    return res.status(404).json({
      msg: `No existe un usuario con el ${id}`
    })
  }
} */
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { name } = body;
    body.password = (0, encript_1.encript)(body.password);
    try {
        const user = new user_1.default(body);
        yield user.save();
        return res.json({
            state: 'ok',
            msg: 'usuario grabado exitosamente',
            name
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUsuario = postUsuario;
/* export const updatedUsuario = async (req:Request, res:Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const idUserExist = await Usuario.findByPk(id);
    if(!idUserExist){
      return res.status(404).json({
        msg:'No existe un usuario con el ID' + id
      })
    }

    body.password = encript(body.password);

    await idUserExist.update(body)
    return res.json(idUserExist)

  } catch (error) {
    return res.status(500).json({
      msg: 'Hable con el administrador'
    })
  }
} */
/* export const deleteUsuario = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const idUserExist = await Usuario.findByPk(id);
    if(!idUserExist){
      return res.status(404).json({
        msg:'No existe un usuario con el ID' + id
      })
    }
    await idUserExist.update({estado: false})
    return res.json(idUserExist)

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Hable con el administrador'
    })
  }
}

export const deleteAllUsers = async (req:Request, res:Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(404).json(errors)
  }
  
  const deleteAll = await Usuario.findAll({
    where: {
      estado: true
    }
  })
  deleteAll.forEach(async (user)=>{
    await user.update({estado: false})
  })
  
  return res.json(deleteAll)
} */
//# sourceMappingURL=usuarios.js.map