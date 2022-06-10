import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params)=>{
        this.id = Number(params.get('id'));
    })
  }
  id: number;
  edit: boolean;

  onEdit(){
    this.edit = true
  }

  onCancel(cancel: boolean){
    this.edit = !cancel;
  }

  onBackClick(){
    this.router.navigate(['..']);
  }
}
