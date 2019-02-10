export interface User {
    Email: string;
    Password: string;
    IsAdmin: boolean;
}
export enum Authenticated {
    Guest = 0,
    User = 1,
    Admin = 2
}
