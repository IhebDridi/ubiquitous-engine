import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MatTreeNestedDataSource } from '@angular/material/tree';
interface VersionNode {
  name: string;
  children?: VersionNode[];
}
@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  APIUrl: string;
  constructor(private navigation: Router,private http: HttpClient) { }

  private ProjectSource = new BehaviorSubject([]);
  currentProject = this.ProjectSource.asObservable();

  changeMessage(message: Array<object>) {
    this.ProjectSource.next(message)
  }
}
