import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FilterPipe} from '../app/filter.pipe';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { Screen2Component } from './screen2/screen2.component';
import { Screen1Component } from './screen1/screen1.component';
import {ServiceService} from '../app/service.service';
import { AddComponent } from './add/add.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';


import { AlertModule } from 'ngx-bootstrap';

//routing pathes 

const routes: Routes = [
 
  {path:'', component:Screen1Component },
  {path:'tasklist',component:Screen2Component},
  {path:'add',component:AddComponent},
  {path:'taskdetails/:id',component:TaskdetailsComponent},
  ];


  
@NgModule({
  declarations: [
    AppComponent,
    Screen2Component,
    Screen1Component,
    FilterPipe,
    AddComponent,
    TaskdetailsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    BsDatepickerModule.forRoot(),
 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules ,useHash:true }),
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
