import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SwitchUrlService {
  private messageSource = new BehaviorSubject("http://www.hoopp.fr/maquette/BELZ/iframe/BELZ_FACADES/belz_facades.html");
  currentMessage = this.messageSource.asObservable();

  constructor(private sanitizer: DomSanitizer) { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
