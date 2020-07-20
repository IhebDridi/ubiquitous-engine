
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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

  constructor(private fb: FormBuilder,private http: HttpClient,private navigation: Router,private servicer:AuthServiceService) {
   }

  ngOnInit(): void {
  }

}
