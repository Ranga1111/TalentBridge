import { Component, OnInit,TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {
  TasKList:any=[];
  ID:any;
  modalRef: BsModalRef;
  message: string;
  TaskID:any;
  selectedValue:any;
  searchText:any='';
  selectedStatus:any='Pending';
  email:any;
  allStatus:any=['All','Pending','Done','Deleted']
  Status:any;

  show:any;
  alerts:any=[]
  constructor(private Service:ServiceService,private router: Router,private modalService: BsModalService) {
    this.Status="close";
 this.GetTaskListDetails();

 this.email = localStorage.getItem('email')
   }

  ngOnInit() {
  }
 GetTaskListDetails(){
   let object={
    "status": "pending"
   }
this.Service.getTaskList(object).subscribe((data:any)=>{
  this.TasKList=data.task_list
  this.Status="open";
})
 }
 view(item){
 
 
   this.router.navigate(['/taskdetails',item.id]);
 
 }
 ///////------ADD New Records------/////////
 add(){
  this.router.navigate(['/add']);
 }
 /// Delete ///
 openModal(item,template: TemplateRef<any>) {
  this.TaskID=item.id;
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});

}

confirm(){
 let object=
 {
  "recordId" :this.TaskID,
  "status" : "deleted"
 }
 this.Service.updateTaskStatus(object).subscribe((data:any)=>{
   console.log(data.message);
   this.GetTaskListDetails();
   if(data.message=="Task status updated successfully")
   {
   this.show=0;
      this.alerts= [{
        type: 'success',
        msg: "Task Deleted successfully",
        timeout: 5000
      }];
    }
    else{
      this.show=0;
      this.alerts= [{
        type: 'danger',
        msg: "Task Deleted successfully",
        timeout: 5000
      }];
    }
 })

 this.modalRef.hide();
}

decline(){
  this.GetTaskListDetails();
  this.modalRef.hide();

}
 /// Done ///
 openModaldone(item,templatedone: TemplateRef<any>){
  this.TaskID=item.id;
  this.modalRef = this.modalService.show(templatedone, {class: 'modal-sm'});
 }
 done(){
  let object=
  {
   "recordId" :this.TaskID,
   "status" : "done"
  }
  this.Service.updateTaskStatus(object).subscribe((data:any)=>{
    console.log(data);
    this.GetTaskListDetails();
    if(data.message=="Task status updated successfully")
    {
    this.show=0;
       this.alerts= [{
         type: 'success',
         msg: "Task Done successfully",
         timeout: 5000
       }];
     }
     else{
       this.show=0;
       this.alerts= [{
         type: 'danger',
         msg: "Task Done successfully",
         timeout: 5000
       }];
     }
  })
  
  this.modalRef.hide();
 }
 cancel(){
  this.GetTaskListDetails();
  this.modalRef.hide();
  
 }
 onChange($event){

   this.selectedValue=$event.toLowerCase();
   let object={
    "status" : this.selectedValue
   }
   this.Service.getTaskList(object).subscribe((data:any)=>{
     console.log(data);
    this.TasKList=data.task_list
  })
 }
 reset(){
  localStorage.clear();
  this.router.navigate(['']);
}
}
