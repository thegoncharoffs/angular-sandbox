import { verify } from "jsonwebtoken";
import { secret } from "../auth.config";
import { Role } from '../models';
import readUsers from '../helpers/readUsers';

export function verifyToken(req, res, next) {
    let token = req.headers["x-access-token"] as string;

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        console.log(decoded);
        req.body.id = decoded['id'];
        next();
    });
};

export function isAdmin(req, res, next) {
    const users = readUsers();
    const foundUser = users.find(user => user.id === req.body.id);
    const isAdmin = foundUser.roles.some(role => role === Role.Admin);

    if (isAdmin) {
        next();
        return;
    } else {
        res.status(403).send({
            message: "Require Admin Role!"
        });
        return;
    }
};

export function isModerator(req, res, next) {
    const users = readUsers();
    const foundUser = users.find(user => user.id === req.body.id);
    const isModerator = foundUser.roles.some(role => role === Role.Moderator);

    if (isModerator) {
        next();
        return;
    } else {
        res.status(403).send({
            message: "Require Moderator Role!"
        });
        return;
    }
};

export function isModeratorOrAdmin(req, res, next) {
    const users = readUsers();
    const foundUser = users.find(user => user.id === req.body.id);
    const isModerator = foundUser.roles.some(role => role === Role.Admin || role === Role.Moderator);

    if (isModerator) {
        next();
        return;
    } else {
        res.status(403).send({
            message: "Require Moderator or Admin Role!"
        });
        return;
    }
};