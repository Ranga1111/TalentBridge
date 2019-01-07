import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Props, account_validation_messages } from '../props';
// import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  show:any;
  alerts:any=[]
  Title: any;
  // ScheduledOn:any;
  Description: any;
  email: any;
  ScheduledOnChanged: boolean = false;
  ScheduledOn: any;
  addDetailsForm: FormGroup;
  validations: any = Props;
  errorMessages: any = new account_validation_messages();
  months: any = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]



  constructor(private service: ServiceService, private router: Router, private formBuilder: FormBuilder) {
    this.email = localStorage.getItem('email');
    console.log(this.ScheduledOn);
  }

  ngOnInit() {
    this.addDetailsForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.validations.NAME)]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.pattern(this.validations.DESCRIPTION)]],
    })
  }
  save() {
    if (this.ScheduledOn) {

      this.ScheduledOn.toLocaleDateString();
      let day;
      console.log(this.ScheduledOn.getDate().length)
      if (this.ScheduledOn.getDate() < 10) {
        day = '0' + this.ScheduledOn.getDate()
      } else {
        day = this.ScheduledOn.getDate()
      }
      var scheduledonDate = day + ' ' + this.months[this.ScheduledOn.getMonth()] + ',' + ' ' + this.ScheduledOn.getFullYear();
      this.ScheduledOn = scheduledonDate;
      console.log(this.ScheduledOn);
    }
    let object = {
      "title": this.Title,
      "scheduledOn": this.ScheduledOn,
      "description": this.Description
    }
    console.log(object)
   
    this.service.createNewTask(object).subscribe((data: any) => {
    
      if(data.message !== 'null'){
        this.show=0;
      this.alerts= [{
        type: 'success',
        msg: data.message,
        timeout: 5000
      }];
    }
    else{
      this.show=0;
      this.alerts= [{
        type: 'danger',
        msg: data.message,
        timeout: 5000
      }];
    }
    })
    setTimeout(() => {
      this.router.navigate(['/tasklist']);
  }, 5000); 
  }
  reset() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  Cancel() {
        this.router.navigate(['/tasklist']);
  }
}
