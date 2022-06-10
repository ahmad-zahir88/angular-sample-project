import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'person-detail-form',
  templateUrl: './person-detail-form.component.html',
  styleUrls: ['./person-detail-form.component.css']
})
export class PersonDetailFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.personDetailsForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      occupation: new FormControl(''),
    })
    this.person = this.test_data.find(e => e.id===this.id)
  }
  
  @Input() edit : boolean = false;
  @Input() id : number;
  person : any;
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
      id: 1
    },
  ]

  columns = [
    {fullName : 'Name'},
    {email: 'Email'},
    {dob: 'Date of Birth'},
    {address: 'Address'},
    {gender: 'Gender'},
    {occupation: 'Occupation'}
  ]

  personDetailsForm : FormGroup;
}
