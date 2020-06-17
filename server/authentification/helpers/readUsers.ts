import * as fs from 'fs';
import { User } from '../models';

export default function readUsers(): User[] {
    return JSON.parse(fs.readFileSync('./server/authentification/data/users.json').toString());
}