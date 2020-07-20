import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from 'src/app/Authentification/login-modal/login-modal.component';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  constructor(public modalService:NgbModal) { }
  Open()
  {
      this.modalService.open(LoginModalComponent)
  }

  ngOnInit(): void {
  }

}
