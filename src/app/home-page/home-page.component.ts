import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test_data = [
    {
      fullName : 'Ahmad A',
      email: 'ahmada@gmail.com', // Should check validity later
      dob: '01-09-2000', // Change to DateTime later
      address: 'A021 B&G Hall, Acton 2601',
      gender: 'Male', // Make as selection later
      occupation: 'Student',
      id: 0
    },
    {
      fullName : 'Ahmad Zahir',
      email: 'ahmadzahir88@gmail.com', // Should check validity later
      dob: '02-09-2000', // Change to DateTime later
      address: 'A034 B&G Hall, Acton 2601',
      gender: 'Male', // Make as selection later
      occupation: 'Student',
      id: 2
    },
  ]
  displayedColumns = ['fullName','email','occupation']

}
