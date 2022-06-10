import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GenderPipe } from '../gender.pipe';
import { User } from '../user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.css']
})
export class UserDetailFormComponent implements OnInit {

  constructor(private userDataService : UserDataService, private genderPipe : GenderPipe) { }

  ngOnInit() {
    this.user = this.userDataService.getUserById(this.id);
    this.userDetailForm = new FormGroup({
      fullName: new FormControl(this.user.fullName),
      email: new FormControl(this.user.email),
      dob: new FormControl(this.user.dob),
      address: new FormControl(this.user.address),
      gender: new FormControl(this.user.gender),
      occupation: new FormControl(this.user.occupation),
    });
    this.genderText = this.user.gender.toString();
  }
  genderText : string;
  @Input() edit : boolean = false;
  @Output() cancelEdit = new EventEmitter<boolean>();
  @Input() id : number;
  user : User;

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

  onSubmit(){
    this.user = {
      id: this.user.id,
      ...this.userDetailForm.value,
    }
    console.log(this.user);
    this.userDataService.setOrCreateUser(this.user);
  }
}
