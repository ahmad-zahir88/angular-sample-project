import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css']
})
export class CreateUserPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  onSubmission(msg : string){
    if (msg==='success'){
      this.router.navigate(['..']);
    }
  }

  onBackClick(){
    this.router.navigate(['..']);
  }

  edit: boolean = true;
  id: number = 0;
}
