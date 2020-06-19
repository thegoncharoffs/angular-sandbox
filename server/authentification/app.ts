import * as express from 'express';
import { UserController, AuthController, FilesController } from './controllers';
import { json, urlencoded } from 'body-parser';
import * as cors from "cors";
import updateUsers from './helpers/updateUsers';
import { hashSync } from 'bcrypt';
import { Role, User } from './models';
import * as fileUpload from 'express-fileupload';

class App {
  public app: express.Application;
  public port: number;

  private users: User[] = [
    {
      id: 0,
      userName: "Igor",
      login: "i",
      password: hashSync("i", 8),
      roles: [Role.Moderator],
      data: "My name is Igor",
    },
    {
      id: 1,
      userName: "Boris",
      login: "b",
      password: hashSync("b", 8),
      roles: [Role.Admin],
      data: "My name is Boris",
    },
    {
      id: 2,
      userName: "Alex",
      login: "a",
      password: hashSync("a", 8),
      roles: [Role.User],
      data: "My name is Alex",
    },
  ];


  private corsOptions = {
    origin: "*"
  };

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initializeData();
    this.initializeMiddlewares();
    this.initializeControllers();
  }

  private initializeData() {
    updateUsers(this.users);
  }

  private initializeMiddlewares() {
    this.app.use(cors(this.corsOptions));

    // parse requests of content-type - application/json
    this.app.use(json());

    // parse requests of content-type - application/x-www-form-urlencoded
    this.app.use(urlencoded({ extended: true }));

    // parses files
    this.app.use(fileUpload());
  }

  private initializeControllers() {
    this.app.use('/', new AuthController().router);
    this.app.use('/', new UserController().router);
    this.app.use('/', new FilesController().router);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;