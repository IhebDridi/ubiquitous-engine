import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-link-test-second',
  templateUrl: './link-test-second.component.html',
  styleUrls: ['./link-test-second.component.css']
})
export class LinkTestSecondComponent implements OnInit {

  constructor(private auth : AuthServiceService) { }

  SecondData = {}

  ngOnInit(): void {


        // this.auth.currentProjectObject.subscribe(result => this.SecondData = result)
        // console.log(this.SecondData)



  }

}
