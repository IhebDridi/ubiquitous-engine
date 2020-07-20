import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-dropdownform-toolbar',
  templateUrl: './dropdownform-toolbar.component.html',
  styleUrls: ['./dropdownform-toolbar.component.css']
})
export class DropdownformToolbarComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }

  newMessage() {
    this.auth.changeMessage("Hello from Sibling")
  }


  ngOnInit(): void {
  }

}
