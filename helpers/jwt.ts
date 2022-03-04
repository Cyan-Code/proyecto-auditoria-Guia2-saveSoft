import jwt from "jsonwebtoken";

type jwtPayload = {
  id: string,
  level: string,
  name: string
}

export const generateJWT = (payload: jwtPayload) => {
  return new Promise((resolve, reject) => {
    const {id, level, name} = payload;
    jwt.sign({id, level, name}, 'myT0K3M',{expiresIn: '24h'},
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se genero el JWT')
        } else {
          resolve(token);
        }
      }
    );
  });
}
