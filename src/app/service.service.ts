import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private host = environment.API_END_POINT;
  private url: string = '';
  constructor(private http:HttpClient) { }

  getTaskList(data) {
    this.url = this.host+'/application/service/task/list?emailId=test@test.com';
    return this.http.post(this.url,data)
  }
  getTaskDetails(data){
    this.url = this.host+'/application/service/task/details?emailId=test@test.com';
    return this.http.post(this.url,data)
  }
  // Create New Task API
  createNewTask(data) {
    this.url = this.host+'/application/service/task/add?emailId=test@test.com';
    return this.http.post(this.url,data)
  }
  //Update Task Status API
  updateTaskStatus(data){
    this.url = this.host+'/application/service/task/update/status?emailId=test@test.com';
    return this.http.post(this.url,data)
  }
}
