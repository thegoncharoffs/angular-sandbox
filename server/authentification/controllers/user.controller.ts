import * as express from 'express';
import { authJwt } from '../middlewares';

class UserController {
    public router = express.Router();

    constructor() {
        this.initializeMiddlewares();
        this.intializeRoutes();
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

    private intializeRoutes() {
        this.router.get("/all", this.allAccess);

        this.router.get(
            "/user",
            [
                authJwt.verifyToken,
            ],
            this.userBoard,
        );

        this.router.get(
            "/mod",
            [
                authJwt.verifyToken,
                authJwt.isModerator,
            ],
            this.moderatorBoard,
        );

        this.router.get(
            "/admin",
            [
                authJwt.verifyToken,
                authJwt.isAdmin,
            ],
            this.adminBoard,
        );
    }

    public allAccess(req, res) {
        res.status(200).send("Public Content.");
    }

    public userBoard(req, res) {
        res.status(200).send("User Content.");
    }

    public adminBoard(req, res) {
        res.status(200).send("Admin Content.");
    }

    public moderatorBoard(req, res) {
        res.status(200).send("Moderator Content.");
    }
}

export default UserController;