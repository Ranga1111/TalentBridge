import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Props,account_validation_messages } from '../props';
@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {
  email:any;
  registerForm: FormGroup;
  validations: any = Props;
  errorMessages: any = new account_validation_messages();
  constructor(private router: Router,private formBuilder: FormBuilder) {
    
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,  Validators.pattern(this.validations.EMAIL_PATTERN)]],
    })
  }
  onSubmit() {
    localStorage.setItem('email',this.email)
    this.router.navigate(['/tasklist']);
 
  }

  
}
