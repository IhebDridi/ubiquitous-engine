import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addressForm = this.fb.group({
    //company: null,
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    Password: [null, Validators.compose([
      Validators.min(2), Validators.required
    ])]
  });

  onSubmit(item:{email,Password}) {
    this.servicer.onLogin(item);

  }

  constructor(private fb: FormBuilder,private http: HttpClient,private navigation: Router,private servicer:AuthServiceService) { }


  ngOnInit(): void {
  }

}
