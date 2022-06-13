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
    if(this.id){
      this.userDataService.getUserById(this.id).subscribe(
        (res)=>{
          this.user = res[0];
          this.userDetailForm.patchValue({
            fullname: this.user.fullname,
            email: this.user.email,
            dob: this.user.dob,
            address: this.user.address,
            gender: this.user.gender,
            occupation: this.user.occupation
          })        
        },
        (err: Error)=>{
          alert("An error occured. Please try again later.")
        }
      );
    }
}

  @Input() edit : boolean = true;
  @Output() cancelEdit = new EventEmitter<boolean>();
  @Input() id? : number;
  user : User = undefined;

  columns = [
    {fullname : 'Name'},
    {email: 'Email'},
    {dob: 'Date of Birth'},
    {address: 'Address'},
    {gender: 'Gender'},
    {occupation: 'Occupation'}
  ];

  userDetailForm : FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl(''),
    occupation: new FormControl('')
  });

  onCancel(){
    this.cancelEdit.emit(true);
  }

  @Output() submit = new EventEmitter<boolean>();

  onSubmit(){
    if(this.user){
      this.userDetailForm.addControl('id',new FormControl(this.user.id));
    }
    
    this.userDataService.setOrCreateUser(this.userDetailForm.value).subscribe(
      (res)=>{
        console.log(res);
        // Check for success later
        this.submit.emit(true);
      },
      (err : Error)=>{
        this.submit.emit(false);
        console.log(err);
      }
    );    
  }
  
}
