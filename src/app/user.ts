export class User{
    fullname : String
    email: String
    dob: Date
    address: String
    gender: Gender
    occupation: String
    id?: Number
    created_at?: Date
}

export enum Gender{
    MALE,
    FEMALE,
    NOT_STATED
}