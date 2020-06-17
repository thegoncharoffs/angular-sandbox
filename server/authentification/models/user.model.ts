import { Role } from './role.model';

export interface User {
    id: number;
    userName: string;
    login: string;
    password: string;
    roles: Role[],
    data: string;
}