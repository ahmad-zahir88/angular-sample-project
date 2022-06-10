import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.css']
})
export class UserDetailFormComponent implements OnInit {

  constructor(private userDataService : UserDataService) { }

  ngOnInit() {
    this.userDetailForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      occupation: new FormControl(''),
    })
    this.user = this.userDataService.getUserById(this.id);
  }
  
  @Input() edit : boolean = false;
  @Output() cancelEdit = new EventEmitter<boolean>();
  @Input() id : number;
  user : any;

  columns = [
    {fullName : 'Name'},
    {email: 'Email'},
    {dob: 'Date of Birth'},
    {address: 'Address'},
    {gender: 'Gender'},
    {occupation: 'Occupation'}
  ]

  userDetailForm : FormGroup;

  onCancel(){
    this.cancelEdit.emit(true);
  }
}
