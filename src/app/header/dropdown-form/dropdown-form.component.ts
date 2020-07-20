import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.css']
})
export class DropdownFormComponent implements OnInit {


  CanLogin = false;

  constructor(private service: AuthServiceService ) {
   }




  ngOnInit(): void {
    this.service.currentCanLogin.subscribe(output =>this.CanLogin = output)
  }

}
