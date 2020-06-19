import * as express from 'express';
import { authJwt } from '../middlewares';
import * as path from 'path';

class FilesController {
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
            "/upload",
            [
                authJwt.verifyToken,
                authJwt.isModeratorOrAdmin,
            ],
            this.upload,
        );
    }

    private upload = (req, res) => {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        const file = req.files.file;
        file.mv(path.join(__dirname, '../files', file.name)).then(
            () => res.status(200).send('File uploaded!'),
            (err) => res.status(500).send(err)
        );
    }
}

export default FilesController;