import { Injectable } from '@angular/core';
import { User, Gender } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  // Dummy Data --> Replace later if database is ready
  private TEST_DATA : User[] = [
    {
      fullName : 'Ahmad A',
      email: 'ahmada@gmail.com', // Should check validity later
      dob: new Date('2000-09-01'),
      address: 'A021 B&G Hall, Acton 2601',
      gender: Gender.MALE,
      occupation: 'Student',
      id: 0
    },
    {
      fullName : 'Ahmad Zahir',
      email: 'ahmadzahir88@gmail.com', // Should check validity later
      dob: new Date('2000-09-01'),
      address: 'A034 B&G Hall, Acton 2601',
      gender: Gender.MALE,
      occupation: 'Student',
      id: 1
    }
  ]

  getUsers() : User[] {
    return this.TEST_DATA;
  }

  getUserById(id : Number) : User {
    return this.TEST_DATA.find(user => user.id === id);
  }

  setOrCreateUser(user : User){
    let existingUser = this.getUserById(user.id);
    if (existingUser){
      console.log("Existing user")
      this.TEST_DATA[this.TEST_DATA.indexOf(existingUser)] = user;
    }
    else{
      console.log("New user")
      this.TEST_DATA.push(user);
    }
  }
}
