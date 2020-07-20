
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.css']
})
export class SignUpCardComponent implements OnInit {


  form = this.fb.group({
    //company: null,
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    Password: [null, Validators.compose([
      Validators.min(2), Validators.required
    ])],
    PasswordCheck: [null, Validators.compose([
      Validators.min(2), Validators.required
    ])]
  });

  onSubmit(item:{Email,Password,PasswordCheck}) {
    if(item.PasswordCheck == item.Password)
    {
      this.servicer.onSignUp(item);
      this.form.reset();
    }
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
