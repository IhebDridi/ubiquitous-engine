import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-dropdownform-log-in',
  templateUrl: './dropdownform-log-in.component.html',
  styleUrls: ['./dropdownform-log-in.component.css']
})
export class DropdownformLogInComponent implements OnInit {
  object : any
  fromPromise:any

  form = this.fb.group({
    //company: null,
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    Password: [null, Validators.compose([
      Validators.min(2), Validators.required
    ])]
  });

  cookieVal:any

  onSubmit(item:{email,Password}) {
    console.log(item)
    try{

      this.servicer.onGetProjects(item).then((data:any)=>{
        
        this.cookieService.set("email",item.email)
        this.cookieVal = this.cookieService.get("email")
        console.log(this.cookieVal)

      })
      this.servicer.onLogin(item);
      this.form.reset();
    }
    catch(e){
      console.log(e)
    }


  }
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private navigation: Router,
    private servicer:AuthServiceService,
    private cookieService: CookieService) {
  }


  ngOnInit(): void {
  }

}
