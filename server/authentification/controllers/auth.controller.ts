import { sign } from "jsonwebtoken";
import { hashSync, compareSync } from "bcrypt";
import { secret } from "../auth.config";
import { User, Role } from '../models';
import * as express from 'express';
import { verifySignUp } from '../middlewares';
import readUsers from '../helpers/readUsers';
import updateUsers from '../helpers/updateUsers';

class AuthController {
    public router = express.Router();

    constructor() {
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares() {
        this.router.use(function (req, res, next) {
            res.header(
                "Access-Control-Allow-Headers",
                "x-access-token, Origin, Content-Type, Accept"
            );
            next();
        });
    }

    private initializeRoutes() {
        this.router.post(
            "/signup",
            [
                verifySignUp.checkDuplicateUsernameOrLogin,
                verifySignUp.checkRolesExisted,
            ],
            this.signUp,
        );

        this.router.post(
            "/signin",
            this.signIn
        );
    }

    private signUp = (req, res) => {
        const users = readUsers();

        // If user already exists
        if (users.some((user) => user.login === req.body.login)) {
            res.status(500).send({ message: "User whith this login already exists" });
        } else {
            const newUser: User = {
                id: users.length,
                userName: req.body.userName,
                login: req.body.login,
                password: hashSync(req.body.password, 8),
                roles: [Role.User],
                data: 'New User' + users.length
            };

            users.push(newUser);
            updateUsers(users);

            res.send({ message: "User was registered successfully!" });
        }
    }

    private signIn = (req, res) => {
        const users = readUsers();
        
        // Search for user in list
        const foundUser = users.find(user => user.login === req.body.login);

        if (!foundUser) {
            return res.status(404).send({ message: "User Not found." });
        }

        // Comparing passwords
        const passwordIsValid = compareSync(
            req.body.password,
            foundUser.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        // Generating new toket by secret word sync
        const token = sign({ id: foundUser.id }, secret, {
            expiresIn: '24h',
        });

        res.status(200).send({
            id: foundUser.id,
            userName: foundUser.userName,
            login: foundUser.login,
            roles: foundUser.roles,
            accessToken: token
        });
    }
}

export default AuthController;