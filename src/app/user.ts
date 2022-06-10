export class User{
    fullName : String
    email: String
    dob: Date
    address: String
    gender: Gender
    occupation: String
    id: Number
}

export enum Gender{
    MALE,
    FEMALE,
    NOT_STATED
}