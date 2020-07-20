
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  form = this.fb.group({
    //company: null,
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    Password: [null, Validators.compose([
      Validators.min(2), Validators.required
    ])]
  });

  onSubmit(item:{email,Password}) {
    console.log(item)
    this.servicer.onLogin(item);
    this.form.reset();

  }
  changeAccountOwn()
  {
    this.servicer.onChangeOwn()
  }

  constructor(private fb: FormBuilder,private http: HttpClient,private navigation: Router,private servicer:AuthServiceService) {
   }
  ngOnInit(): void {
  }

}
