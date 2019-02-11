export interface User {
    email: string;
    password: string;
    isAdmin: boolean;
}

export enum Authenticated {
    Guest = 0,
    User = 1,
    Admin = 2
}

export interface FlightDto{
    flightNumber: string,
    from: string,
    to: string
}