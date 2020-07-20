import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
//import { utimes } from 'fs';
@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  APIUrl: string;
  loginStatus :boolean;

  CanLogin :boolean;

  private CanLoginSource = new BehaviorSubject(this.CanLogin);
  currentCanLogin = this.CanLoginSource.asObservable();

  private LoginStatusSource = new BehaviorSubject(this.loginStatus);
  currentLoginStatus = this.LoginStatusSource.asObservable();

  private messageSource = new BehaviorSubject<any>([]);
  currentMessage = this.messageSource.asObservable();


  onsignUpTest()
  {
    this.loginStatus = true;
    console.log(this.loginStatus)
    this.LoginStatusSource.next(true)

  }
  OnLoginTest()
  {
    this.loginStatus = true;
    console.log(this.loginStatus)
    this.LoginStatusSource.next(true)

  }
  OnlogoutTest()
  {
    this.loginStatus = false;
    console.log(this.loginStatus)
    this.LoginStatusSource.next(false)
  }

  onChangeOwn()
  {
    this.CanLogin = !this.CanLogin
    console.log(this.CanLogin)
    this.LoginStatusSource.next(this.CanLogin)
  }



  onSignUp(item)
  {
    this.APIUrl = "http://localhost:4000/Users/SignUp";
    console.log(item)
    if(item.Password == item.PasswordConfirm)
    {
      const newItem = {"email": item.email,"Password": item.Password}
      console.log(newItem)
      this.http.post(this.APIUrl,newItem).subscribe(gotData =>{
        if(gotData["message"].email==item.email)
        {
          alert("your account has been created, please log in.")
        }

        
      },error =>{
        if(error.status ==409)
        {
          alert(error.error.message)
        }
        else{
          alert("invalid email")
        }
        console.log(error)
      });
    }
    else{
      alert("the passwords you have provided do no match")
    }

  }

  onLogout(){
      let headers = new Headers();
      console.log(headers.get("Authorization"))
      headers.delete("Authorization")
      localStorage.removeItem("token")
      console.log(headers.get("Authorization"))
      this.navigation.navigateByUrl("/UserLogin")
  }



  changeMessage(objecter)
  {
    this.messageSource.next(objecter)
    console.log(objecter)
  }
  objecter = {}


  private Projects:any

  //this method is dedicated to the navPage component, it gets all the projects at once 
  //but it does not get the versions or the models
  onGetProjects(item) : any
  {
    return new Promise(resolve=>{var componentHolder: any
      this.APIUrl = "http://localhost:4000/ProjectData/ShowAllProjects/OneUser"
      const newItem = {"email": item.email}
      this.http.post(this.APIUrl,newItem).subscribe(gotData =>{
        var componentIntermed: any
  
        componentHolder = gotData
        //this is where the BehaviorSubject is updated
        this.Projects = gotData
        this.messageSource.next(gotData)
        componentIntermed = gotData
        componentHolder = gotData
        resolve(gotData)
      })
    })
  }

  onGetOneProject(item) : any
  {
    return new Promise(resolve =>{
      this.APIUrl = "http://localhost:4000/ProjectData/ShowOneProject"
      const newItem = {"email": item.email,"ProjectName": item.ProjectName}
      this.http.post(this.APIUrl,newItem).subscribe(gotData=>{
        resolve(gotData)
      })
    })
  }
  onUpdateOneModel(item): any
  {
    return new Promise(resolve=>{
      this.APIUrl = "http://localhost:4000/modelData/UpdateOneModelAnnotations"
      const newItem = {"email":item.email,
      "ProjectName": item.ProjectName,
      "versionName": item.versionName,
       "ProjectModelName": item.ProjectModelName,
       "newAnnotations": item.newAnnotations,
       "newNumberOfPuces": item.newNumberOfPuces}
       this.http.put(this.APIUrl,newItem).subscribe(gotData=>{
         resolve(gotData)
       })
    })
  }


  onUpdateOneModelContent(item): any
  {
    return new Promise(resolve=>{
      this.APIUrl = "http://localhost:4000/modelData/UpdateOneModelContent"
      const newItem = {"email":item.email,
      "ProjectName": item.ProjectName,
      "versionName": item.versionName,
       "ProjectModelName": item.ProjectModelName,
       "newContent": item.newContent}
       this.http.put(this.APIUrl,newItem).subscribe(gotData=>{
         resolve(gotData)
       })
    })
  }



  onLogin(item:{email,Password}) {
    this.APIUrl = "http://localhost:4000/Users/Login";
    this.http.post(this.APIUrl,item).subscribe(gotData =>{
      if(gotData.hasOwnProperty("message"))
      {
        //When the projects are called, the BehaviorSubject is updated
        this.onGetProjects({email: item.email})
        let headers = new Headers();
        let datas = gotData["token"]
        headers.append("Authorization","bearer "+datas)
        this.OnLoginTest()

        localStorage.setItem("token",datas)
        this.navigation.navigateByUrl("/PageNav")
        console.log(headers.get("Authorization"))
      }
    },error =>{

      console.log("unauthorised")
    });
  }

  constructor(private navigation: Router,private http: HttpClient) { }
}
