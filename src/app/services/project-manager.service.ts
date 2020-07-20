import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectMAnagerService {

  APIUrl: string;
  constructor(private navigation: Router,private http: HttpClient) { }


  //should not be used for the moment
  onCreateProject(item)
  {
    this.APIUrl = "http://localhost:4000/ProjectData/AddNewProject";
    const newItem = {"ProjectName": item.ProjectName,"email": item.email}
    this.http.post(this.APIUrl,newItem).subscribe(gotData =>{
      console.log(gotData)
    });
  }

  //should not be used for the moment
  onCreateVersion(item)
  {
    this.APIUrl = "http://localhost:4000/versionData/addNewVersion";
    const newItem = {"ProjectName": item.ProjectName,"versionName": item.versionName}
    this.http.post(this.APIUrl,newItem).subscribe(gotData =>{
      console.log(gotData)
    });
  }

  //the user name propably should be saved in this object too to avoid any future clash between similar models

  onGetProjects(item)
  {
    this.APIUrl = "http://localhost:4000/ProjectData/ShowAllProjects/OneUser"
    console.log(item,item.email)
    const newItem = {"email": item.email}
    this.http.post(this.APIUrl,newItem).subscribe(gotData =>{
      console.log(gotData)
      

    })
  }


  onCreateModel(item)
  {
    this.APIUrl = "http://localhost:4000/modelData/addNewModel";
    if(item.Password == item.PasswordConfirm)
    {
      const newItem = {"versionName": item.versionName,
      "ProjectModelName": item.ProjectModelName
      ,"source": item.source
      ,"annotations": item.annotations
      ,"numberOfPuces": item.numberOfPuces}
      this.http.post(this.APIUrl,newItem).subscribe(gotData =>{
        console.log(gotData)
      });
    }
  }






}
