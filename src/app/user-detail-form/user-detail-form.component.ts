import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { User } from '../user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.css']
})
export class UserDetailFormComponent implements OnInit {

  constructor(private userDataService : UserDataService, private datePipe: DatePipe, private snackbar : MatSnackBar) { }

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
    this.curr_time = Date.now();
}
  curr_time : Number;
  @Input() edit : boolean = true;
  @Output() cancelEdit = new EventEmitter<boolean>();
  @Input() id? : number;
  user : User;

  columns ={
    fullname : 'Name',
    email: 'Email',
    dob: 'Date of Birth',
    address: 'Address',
    gender: 'Gender',
    occupation: 'Occupation'
  };

  userDetailForm : FormGroup = new FormGroup({
    fullname: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(320)])),
    email: new FormControl('', Validators.compose([Validators.required,Validators.email,Validators.maxLength(120)])),
    dob: new FormControl('', Validators.required),
    address: new FormControl('', Validators.compose([Validators.required,Validators.maxLength(640)])),
    gender: new FormControl('', Validators.compose([Validators.required,Validators.min(0),Validators.max(2)])),
    occupation: new FormControl('', Validators.compose([Validators.required,Validators.maxLength(120)]))
  });

  onCancel(){
    this.cancelEdit.emit(true);
  }

  @Output() submit = new EventEmitter<boolean>();

  onSubmit(event){
    event.preventDefault();
    // Check for invalid data
    for (let control in this.userDetailForm.controls){
      
      if (this.userDetailForm.controls[control].invalid){
        
        this.snackbar.open('Entry for ' + this.columns[control] + ' is invalid. Please fill in with a valid value', 'Close', {
          duration: 7000,
          panelClass: ['mat-toolbar','mat-warn']
        });
        this.submit.emit(false);
        return;
      }
    }
    
    if(this.user){
      this.userDetailForm.addControl('id',new FormControl(this.user.id));
    }
    this.userDetailForm.patchValue(
      {'dob' : this.datePipe.transform(this.userDetailForm.value.dob,"yyyy-MM-dd")}
    );

    this.userDataService.setOrCreateUser(this.userDetailForm.value).subscribe(
      (res)=>{
        // Check for success later
        console.log(res);
        this.snackbar.open('Sucesfully saved', 'Close', {
          duration: 3500,
          panelClass: ['mat-toolbar','mat-primary']
        });
        this.submit.emit(true);
        this.user = {
          id : this.id,
          ...this.userDetailForm.value
        }
        
      },
      (err : Error)=>{
        this.snackbar.open('An error occured. Please try again later', 'Close', {
          duration: 3500,
          panelClass: ['mat-toolbar','mat-warn']
        });
        this.submit.emit(false);
        console.log(err);
      }
    );    
  }
}
