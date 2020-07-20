import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-link-test-first',
  templateUrl: './link-test-first.component.html',
  styleUrls: ['./link-test-first.component.css']
})
export class LinkTestFirstComponent implements OnInit {

  constructor(private auth : AuthServiceService) { }

  FistData = {}

  ngOnInit(): void {

    //this.auth.currentProjectObject.subscribe(result => {this.FistData = result})
    //console.log(this.FistData)
  }
  clickMe()
  {
    this.auth.changeMessage({"hi": "hello there from 1"})
  }

}
