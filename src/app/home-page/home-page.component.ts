import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private userDataService : UserDataService) { }

  ngOnInit() {
    this.userDataService.getUsers().subscribe(
      (res)=> {this.test_data = res;}
    );    
  }

  displayedColumns = ['fullName','email','occupation']

  onRowClick(id: number){
    this.router.navigate(['detail/'+id])
  }

  test_data : any;

  onCreate(){
    this.router.navigate(['create'])
  }
}
