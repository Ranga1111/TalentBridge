import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {
  id: any;
  sub: any;
  email:any;
  taskDetails:any={};
  constructor(private route: ActivatedRoute,private service:ServiceService,private router: Router) {
    this.email = localStorage.getItem('email')
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
   });
  //  console.log(this.id);
    let object={
      "recordId" : this.id
    }
    this.service.getTaskDetails(object).subscribe((data:any)=>{
      // console.log(data);
      this.taskDetails=data.task_detail;
    })
  }
  back(){
    this.router.navigate(['/tasklist']);
  }
  reset(){
    this.router.navigate(['']);
  }
}
