import * as fs from 'fs';
import { User } from '../models';

export default function updateUsers(users: User[]): void {
    fs.writeFileSync('./server/authentification/data/users.json', Buffer.from(JSON.stringify(users)));
}