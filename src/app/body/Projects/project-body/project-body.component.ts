import { Component, OnInit, ChangeDetectorRef, HostListener, ViewChild, ElementRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { SwitchUrlService } from '../../../services/switch-url.service'
import { DomSanitizer } from '@angular/platform-browser';

interface Window {
  HTMLInputElement : typeof HTMLInputElement ;
}


@Component({
  selector: 'app-project-body',
  templateUrl: './project-body.component.html',
  styleUrls: ['./project-body.component.css']
})
export class ProjectBodyComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  events: string[] = [];
  opened: boolean;
  Fullscreen = false;



  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private switcheroo:SwitchUrlService,private sanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

   }
   openUp()
   {
     console.log("go full")
    let elem = document.documentElement;
    let methodToBeInvoked = elem.requestFullscreen || elem['mozRequestFullscreen']
      ||
      elem['msRequestFullscreen'];
    if (methodToBeInvoked && this.Fullscreen == false) {methodToBeInvoked.call(elem)}
    if(this.Fullscreen == true){
      document.exitFullscreen()
      console.log(this.Fullscreen)

    }

    this.Fullscreen = !this.Fullscreen;
   }
   something: any;



   completeIframe: HTMLIFrameElement;

   //iframe: HTMLIFrameElement;
   tick = Date.now();
   log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - this.tick}ms`);

   /*@HostListener("load",['$event'])
   onPageLoad(event: Event)
   {
    console.log(event)
    alert("hey there")

    console.log(this.iframe)
   }*/
   //@ViewChild('iframe') iframe: ElementRef;
   /*@HostListener("load", ["$event"])
  onLoaded(event:Event)
  {

    console.log("loaded")
    //console.log(event)
    console.log(this.iframe.nativeElement.contentDocument+" from loader")
    //document.body.append(this.el.nativeElement)
    //console.log(this.el.nativeElement+"from loader")

  }*/
    ngAfterViewInit(){
      //document.domain= "localhost:3000"
      //let doc =  this.iframe.nativeElement.addEventListener("load",()=>{console.log("hello "+this.iframe.nativeElement.contentWindow)})
      //console.log(document.getElementById("superposition"))
      //console.log(window.frames["superposition"].contentWindow)
      //console.log(doc)

     /*this.iframe = document.getElementById("superposition") as HTMLIFrameElement;

     var func =  this.iframe.addEventListener("load",(event)=>{
      console.log(event)
      alert("hey there")

      console.log(this.iframe)
      this.completeIframe = this.iframe;
      return this.completeIframe
     });*/

     //var func2 = this.iframe.onPageLoad(event)

     /*var yy=  async function (frame: HTMLIFrameElement,completeIframe: HTMLIFrameElement ){

       await frame.addEventListener("load",function(e){
         console.log(e)
         alert("hey there")
         console.log(frame)
         completeIframe = frame
         return frame
       })
       return yy*/

      /*frame.onload = function(){
     //var frameDocument = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;

     alert('myframe is loaded');
     console.log(true)
}*/
     //return Promise.resolve(frame+"from yy")
   //};
   /*var hello =  func
   console.log(hello+"from hello")
   var hi = async()=>{
    var hithere = func
    console.log(hithere+"from hi")
    this.log(hithere)
    return hithere
    }


    hi().then(()=>{
      this.iframe = document.getElementById("superposition") as HTMLIFrameElement
      console.log(this.iframe.contentDocument)

    })*/

    //console.log(this.iframe.contentDocument)

     //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
     //Add 'implements AfterViewInit' to the class.
   }








  ngOnInit(){



    this.switcheroo.currentMessage.subscribe(message => {this.something = this.sanitizer.bypassSecurityTrustResourceUrl(message);console.log(this.something+" from parent")})

  }

}
