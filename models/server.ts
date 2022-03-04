import express, {Application} from 'express';
import * as userRoute from '../routes/user';
import * as userStudent from '../routes/student';
import * as authRouter from '../routes/authentication';
import cors from 'cors';

import db from '../db/connection';

class Server {
  private app:Application;
  private port:string;
  private apiPaths = {
    users: '/api/users',
    students: '/api/students',
    auth: '/api/auth'
  }

  constructor ( ) {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.dbConnection();
    this.middlewares();
    this.routes();  
  }

  async dbConnection(){
    try {
      
      await db.authenticate();
      console.log('db online');

    } catch (error) {
      throw new Error(`${error}: O sea, efesota`);
    }
  }

  middlewares(){
    this.app.use( cors() );
    this.app.use(express.json());
    this.app.use(express.static('public'))
  }

  routes(){
    this.app.use(this.apiPaths.users, userRoute.default);
    this.app.use(this.apiPaths.students, userStudent.default);
    this.app.use(this.apiPaths.auth, authRouter.default);
  }

  listen(){
    this.app.listen( this.port, ()=> {
      console.log('Servidor corriento en el puerto '+ this.port);
    })
  }

}

export default Server;
