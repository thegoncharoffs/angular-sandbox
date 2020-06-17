import { Role } from '../models';
import readUsers from '../helpers/readUsers';

export function checkDuplicateUsernameOrLogin(req, res, next) {
    const users = readUsers();
    const foundUserByName = users.find(user => user.userName === req.body.userName);
    const foundUserByLogin = users.find(user => user.login === req.body.login);

    if (foundUserByLogin) {
        res.status(400).send({
            message: "Failed! Login is already in use!"
        });
        return;
    }

    if (foundUserByName) {
        res.status(400).send({
            message: "Failed! Username is already in use!"
        });
        return;
    }

    next();
};

export function checkRolesExisted(req, res, next) {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (![Role.Admin, Role.Moderator, Role.User].includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Failed! Role does not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }

    next();
};