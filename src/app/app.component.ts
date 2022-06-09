import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample-project';
  test_data = [
    {
      fullName : 'Ahmad A',
      email: 'ahmada@gmail.com', // Should check validity later
      dob: '01-09-2000', // Change to DateTime later
      address: 'A021 B&G Hall, Acton 2601',
      gender: 'Male', // Make as selection later
      occupation: 'Student',
      id: '00'
    },
    {
      fullName : 'Ahmad Zahir',
      email: 'ahmadzahir88@gmail.com', // Should check validity later
      dob: '02-09-2000', // Change to DateTime later
      address: 'A034 B&G Hall, Acton 2601',
      gender: 'Male', // Make as selection later
      occupation: 'Student',
      id: '002'
    },
  ]
  displayedColumns = ['fullName','email','dob','gender','address','occupation','detail']
}
