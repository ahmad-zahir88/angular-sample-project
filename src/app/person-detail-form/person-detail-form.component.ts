import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'person-detail-form',
  templateUrl: './person-detail-form.component.html',
  styleUrls: ['./person-detail-form.component.css']
})
export class PersonDetailFormComponent implements OnInit {

  constructor(private userDataService : UserDataService) { }

  ngOnInit() {
    this.personDetailForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      occupation: new FormControl(''),
    })
    this.person = this.userDataService.getUserById(this.id);
  }
  
  @Input() edit : boolean = false;
  @Output() cancelEdit = new EventEmitter<boolean>();
  @Input() id : number;
  person : any;

  columns = [
    {fullName : 'Name'},
    {email: 'Email'},
    {dob: 'Date of Birth'},
    {address: 'Address'},
    {gender: 'Gender'},
    {occupation: 'Occupation'}
  ]

  personDetailForm : FormGroup;

  onCancel(){
    this.cancelEdit.emit(true);
  }
}
