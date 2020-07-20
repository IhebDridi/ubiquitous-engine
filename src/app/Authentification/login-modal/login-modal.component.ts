import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {


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

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal,private fb: FormBuilder,private http: HttpClient,private navigation: Router,private servicer:AuthServiceService) {
   }


  ngOnInit(): void {
  }

}
