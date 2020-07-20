import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service'


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private service: AuthServiceService) { }

  LoginStatus : boolean;



  onsubmitlogout(){
    this.service.OnlogoutTest()

    console.log(this.LoginStatus+" from toolbar")
  }
  onsubmitlogin()
  {
    this.service.OnLoginTest()
    console.log(this.LoginStatus+" from toolbar")
  }

  ngOnInit() {
    this.service.currentLoginStatus.subscribe(status => this.LoginStatus=status)
  }

}
