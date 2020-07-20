import { Directive, HostListener, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: 'iframe [appLoaded]'
})
export class LoadedDirective {

  constructor(private el:ElementRef){

  }


  @HostListener("load", ["$event.srcElement"])
  onLoaded(target: HTMLIFrameElement)
  {

try
{
    //console.log("loaded")
    console.log(target)
    //console.log(target.DOCUMENT_TYPE_NODE)
    console.log(target.contentDocument)
    console.log(target.contentWindow)
    //console.log(target.baseURI)
    //console.log(this.rd)
    //console.log(document)
    //console.log(this.el.nativeElement.focus())
    //let frame: HTMLIFrameElement=iframe.nativeElement
    //console.log(event.currentTarget.)
    //frame.append(event.currentTarget)
    //console.log(iframe.nativeElement+" from loader")
    //document.body.append(this.el.nativeElement)
    //console.log(this.el.nativeElement+"from loader")
  }
  catch(err){
    console.log(err)
  }
  }

  /*constructor(el: ElementRef) {
    document.body.append(el.nativeElement)
    console.log(document)
    //console.log(el.nativeElement)
   }*/

}
