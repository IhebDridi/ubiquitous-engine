import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-dropdownform-sign-up',
  templateUrl: './dropdownform-sign-up.component.html',
  styleUrls: ['./dropdownform-sign-up.component.css']
})
export class DropdownformSignUpComponent implements OnInit {

  form = this.fb.group({
    //company: null,
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    Password: [null, Validators.compose([
      Validators.min(2), Validators.required
    ])],
    PasswordConfirm: [null, Validators.compose([
      Validators.min(2), Validators.required
    ])]
  });

  onSubmit(item:{Email,Password,PasswordConfirm}) {
    console.log(item)
    this.servicer.onSignUp(item);
    this.form.reset();

  }
  constructor(private fb: FormBuilder,private http: HttpClient,private navigation: Router,private servicer:AuthServiceService) {
  }

  ngOnInit(): void {
  }

}
