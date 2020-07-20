import { Component, OnInit, HostListener, OnDestroy, Injectable, ɵConsole   } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTransferService } from "src/app/services/data-transfer.service"
import { BehaviorSubject } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { isUndefined } from 'util';

interface VersionNode {
  name: string;
  children?: VersionNode[];
}

const TREE_DATA: VersionNode[] = [
  {
    name: 'version 1',
    children: [
      {name: 'Model 1'},
      {name: 'Model 2'},
      {name: 'Model 3'},
      {name: 'Model 4'},
      {name: 'Model 5'},
    ]
  }, {
    name: 'version 2',
    children: [
      {
        name: 'Model 1',
        children: [
          {name: 'Puce 1: Title 1'},
          {name: 'Puce 2: Title 2'},
        ]
      }, {
        name: 'Model 2',
        children: [
          {name: 'Puce 1: Title 1'},
          {name: 'Puce 2: Title 2'},
        ]
      },
    ]
  },
];


declare var $:any

@Component({
  selector: 'app-model-m',
  templateUrl: './model-m.component.html',
  styleUrls: ['./model-m.component.css']
})
@Injectable()

export class ModelMComponent implements OnInit,OnDestroy {

  newMessage(something) {
    this.service.changeMessage(something)
    console.log(something)
  }
  

  constructor( private modalService: NgbModal,
    private service: DataTransferService,
    private auth: AuthServiceService,
    private cookieService:CookieService) {
  }

  onDataGet()
  {
    var item = {ProjectName: "Project2"}
    //this.service.onGetProjects(item)
  }
  ngAfterViewInit() {
    this.ProjectName = this.cookieService.get("Project")
    this.ProjectTitle = this.ProjectName
  }
  ProjectTitle= ""
  ProjectName: any
  VersionBankGeneral = []
  cookieVal: any
  modelList: any
  ngOnInit(): void {

    this.ProjectName = this.cookieService.get("Project")
    this.ProjectTitle = this.ProjectName
    this.cookieVal = this.cookieService.get("email")

    this.auth.onGetOneProject({email: this.cookieVal,ProjectName: this.ProjectName}).then((data:any)=>{
      console.log(data)
      for (let index = 0; index < data.modelsList.length; index++) {
        const element = data.modelsList[index];
        console.log(element)
        //const modelsListObject = {index:element.modelsList}
        if(element.modelsList.length>0)
        {
          console.log(element)
        var versionObject = {
          "VersionName": element.versionName,
          "MqNumber" : element.modelsList.length,
          "MqBank" : element.modelsList
        }
        versionBank.push(versionObject)
        
        }
      }
        console.log(versionBank)
      
        currentMq = versionBank[0].MqBank[0].source
        currentVer = versionBank[0]
        numberOfMq = versionBank[0].MqNumber
        numberOfPoints = versionBank[0].MqBank[0].numberOfPuces
        console.log(numberOfPoints)
        if(isUndefined(versionBank[0].MqBank[0].annotations))
        {
          versionBank[0].MqBank[0].annotations = {}
        }
        console.log(versionBank[0].MqBank[0])
        collector = versionBank[0].MqBank[0].annotations
          $("#my_picture").reel({
            images: currentMq,
            frames: 104,
            frame: 1,
            annotations: currentMq.annotations
            }
          )

        var contentCollector = {}
        currentNumberOfMq = numberOfMq
        $(document).ready(()=>{
          $("#show-puces").click((e)=>{
            i++;
            $("#Integration-puce").attr('disabled', showP);
            if(i%2==0) {
                $("#show-puces-button").html("+")
                showNoPuces()
                seen = false
            }
            else{
            modalManager(startingPoints)
                showPuces(collector,startingFrame)
                $("#show-puces-button").html("-")
            }
            showP =!showP
            console.log(showP)
      
          })
          var indexMIndicator = 0
          var oldIndexV = 0
          var oldIndexM = 0
          var ChangeButtosNumber = 0
          for (let indexV = 0; indexV < versionBank.length; indexV++) {
            const element = versionBank[indexV];
            $(".flex-horizontal-button-container").append("<div style='z-index: 20;margin: 10px;text-align: center;line-height: 50px;font-size: 50px;border: 1px;'><button id='VerButton"+indexV+"' style='box-shadow: 3px 4px 0px 0px #1564ad;background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);background-color:#79bbff;border-radius:5px;border:1px solid #337bc4;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;font-weight:bold;padding:10px 16px;text-decoration:none;text-shadow:0px 1px 0px #528ecc;'>"+versionBank[indexV].VersionName+"</button></div>")
            
            $(document).on("click","#VerButton"+indexV,(e)=>{
              //get the clicked number of the version
              var indexValueV = parseInt(e.target.id[e.target.id.length -1])
              console.log("you are now in the version number: ",indexValueV)

              var startingPoints = []
                    var ix=0
                    for (let index in versionBank[indexValueV].MqBank[0].annotations) {

                      console.log(versionBank[indexValueV].MqBank[0].annotations[index].start)
                      startingPoints[ix]=(versionBank[indexValueV].MqBank[0].annotations[index].start)
                      ix++
                    }

              
              console.log(numberOfPoints)
              
              //put the collectors points inside the object for preservation
              versionBank[oldIndexV].MqBank[oldIndexM].annotations = collector
              //put the number of points inside the object for preservation
              versionBank[oldIndexV].MqBank[oldIndexM].numberOfPuces = Object.keys(collector).length

              //undefined can come from putting an empty object inside the database
              if(isUndefined(collector))
              {
                collector = {}
              }
              if(isUndefined(versionBank[indexValueV].MqBank[0].annotations))
              {
                versionBank[indexValueV].MqBank[0].annotations = {}
              }
              //$("#hidden-modals").append("<div class='modal' id='modal"+numberOfPoints+"'><div class='modal-header' id='modalHeader'><div class='title' style='font-size: 1.25rem;' id='originalTitle"+numberOfPoints+"'>Example Modal "+numberOfPoints+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '><div id='originalDescription"+numberOfPoints+"'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis labore nisi maiores natus laborum, repellat nihil velit et quisquam laboriosam vel itaque ab maxime. Perferendis, itaque dolor non reprehenderit, recusandae obcaecati, sapiente illum at iure atque minus labore eius adipisci aliquam ratione temporibus cupiditate libero dolorem distinctio beatae veritatis aperiam. Dolor explicabo, voluptates atque soluta dolorem alias minus nisi necessitatibus quidem inventore modi eligendi similique, aliquam eius corrupti quisquam! Eaque nam nisi expedita. Numquam autem molestias quaerat illo. Sunt?</div><img class='originalPic' id='originalPuceImage"+numberOfPoints+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /></div></div>")
              $("#points-list").empty()
              $("#hidden-modals").empty()

              

              for (let index = 0; index < numberOfPoints; index++) {
              $("#hidden-modals").append("<div class='modal' id='ChangeModal"+index+"'><div class='modal-header' id='ChangeModalHeader'><div class='title' style='font-size: 1.25rem;'>Change Modal "+index+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '>Puce title: <input type='text' id='puceTitleForChange"+index+"'><br><br>Puce description (optional): <br><textarea name='' id='changeDescription"+index+"' cols='30' rows='10'></textarea><br>Puce Picture:<input type='file' id='puce3File"+index+"' ><img class='ChangePic' id='changePuceImage"+index+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /><br><button id='savingButton"+index+"'>save</button></div></div>")
              $("#points-list").append("<button data-modal-target='#ChangeModal"+index+"'>change modal"+index+"</button>")
              
                
              }
              
              //  console.log("old version: ",versionBank[oldIndexV].VersionName)
              //  console.log("new version: ",versionBank[indexValueV].VersionName)
              //  console.log("old annotations: ",versionBank[oldIndexV].MqBank[oldIndexM].annotations)
              //  console.log("new annotations: ",versionBank[indexValueV].MqBank[0].annotations)
              //  console.log("old index: ",oldIndexV)
              //  console.log("new index: ",indexValueV)

              console.log("the collector that will be saved is: ", collector)

              

              this.auth.onUpdateOneModel(
                {email: this.cookieVal,
                ProjectName: this.ProjectName,
                versionName: versionBank[oldIndexV].VersionName,
                ProjectModelName: versionBank[oldIndexV].MqBank[oldIndexM].ProjectModelName,
                newAnnotations: collector,
                newNumberOfPuces: Object.keys(collector).length}).then((data:any)=>{
                  console.log(Object.keys(collector).length,"is the save number of points in the version number", oldIndexV)
                  // console.log(data)
                  // console.log(versionBank[oldIndexV].MqBank[oldIndexM])
                  // console.log(oldIndexM)
                })
                //update the collector for the new version after the update of the database
                collector = versionBank[indexValueV].MqBank[0].annotations
                //update the number of points after the database update

                //if the number of points = 0, get it without any modification
                //if it is greater than 0, add +1 to negate the overlapping effect of the collector
                ChangeButtosNumber = versionBank[indexValueV].MqBank[0].numberOfPuces 
                if(numberOfPoints>0)
                {
                  numberOfPoints = versionBank[indexValueV].MqBank[0].numberOfPuces +1
                }
                else
                {
                  numberOfPoints = versionBank[indexValueV].MqBank[0].numberOfPuces 
                }

                
                //remove the event listeners from the old model buttons
                for (let indexM = 0; indexM < versionBank[oldIndexV].MqBank.length; indexM++) {
                  $(document).off("click","#mqButton"+indexM)
                  
                  
                  
                }
                //this is for the future iteration when the button is clicked
                oldIndexV = indexValueV
                
                currentMq = versionBank[indexValueV].MqBank[0].source
                showPuces(versionBank[indexValueV].MqBank[0].annotations,1)
                $(".flex-vertical-button-container").empty()
                

                //modals button managers

                $("#points-list").empty()
                $("#hidden-modals").empty() 
                for (let index = 0; index < ChangeButtosNumber; index++) {
                  //number of points should be upgraded for future use
                  console.log("adding modals")
                  $("#hidden-modals").append("<div class='modal' id='modal"+index+"'><div class='modal-header' id='modalHeader'><div class='title' style='font-size: 1.25rem;' id='originalTitle"+index+"'>Example Modal "+index+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '><div id='originalDescription"+index+"'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis labore nisi maiores natus laborum, repellat nihil velit et quisquam laboriosam vel itaque ab maxime. Perferendis, itaque dolor non reprehenderit, recusandae obcaecati, sapiente illum at iure atque minus labore eius adipisci aliquam ratione temporibus cupiditate libero dolorem distinctio beatae veritatis aperiam. Dolor explicabo, voluptates atque soluta dolorem alias minus nisi necessitatibus quidem inventore modi eligendi similique, aliquam eius corrupti quisquam! Eaque nam nisi expedita. Numquam autem molestias quaerat illo. Sunt?</div><img class='originalPic' id='originalPuceImage"+index+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /></div></div>")
                }
                
                
                buttonManager()
                //this "for" loop will remove the old event listeners from the saving button and from the picture in the change modals
                for (let index = 0; index < ChangeButtosNumber; index++) {
                  console.log("removing "+index)
                  const savingButton1 = document.getElementById("savingButton"+index+"")
                  
                  if(savingButton1)
                  {
                    savingButton1.removeEventListener("click",()=>console.log("removed event listener from saving button number: ",index))
                  }
                  
                  const PicChange = document.getElementById("puce3File"+index)

                  if(PicChange)
                  {
                    PicChange.removeEventListener("change",()=>console.log("removed event listener from Pic number: ",index))
                  }
                  
                }
                //then we add the event listeners of the new buttons
                var chaosModal = {}
                var chaosModalIndex = 0
                for (let index = 0; index < ChangeButtosNumber; index++) {
                  console.log("adding "+index)
                  $("#hidden-modals").append("<div class='modal' id='ChangeModal"+index+"'><div class='modal-header' id='ChangeModalHeader'><div class='title' style='font-size: 1.25rem;'>Change Modal "+index+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '>Puce title: <input type='text' id='puceTitleForChange"+index+"'><br><br>Puce description (optional): <br><textarea name='' id='changeDescription"+index+"' cols='30' rows='10'></textarea><br>Puce Picture:<input type='file' id='puce3File"+index+"' ><img class='ChangePic' id='changePuceImage"+index+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /><br><button id='savingButton"+index+"'>save</button></div></div>")
                  $("#points-list").append("<button data-modal-target='#ChangeModal"+index+"'>change modal"+index+"</button>")
                  const savingButton1 = document.getElementById("savingButton"+index+"")
                  savingButton1.addEventListener("click",()=>{
                      chaosModal = {}
                      $("#originalDescription"+index+"").text($("#changeDescription"+index+"").val())
                      //console.log($("#originalDescription"+index+""))
                      //console.log($("#changeDescription"+index+"").text())
                      $("#originalTitle"+index+"").text($("#puceTitleForChange"+index+"").val())
                      const modal = savingButton1.closest('.modal')
                      console.log("open Modal",modal)
                      openModal(modal)
                      const Modal = document.querySelectorAll('[data-modal-target]')
                      Modal.forEach(button =>{
                        
                        //console.log(button)
                        chaosModalIndex++
                        const modal = document.querySelector(button.getAttribute("data-modal-target"))
                        var attribName: string = button.getAttribute("data-modal-target")
                        if(modal)
                        {
                          
                          console.log(attribName)
                          var ContentHTMLCode = modal.outerHTML
                          chaosModal[attribName] =  ContentHTMLCode

                        }
                        
                        // chaoticCollector[chaosIndex] = modal
                        
                        })
                        // console.log({"#modal1":chaosModal["#modal1"]})
                        // this.auth.onUpdateOneModelContent(
                        //   {email: this.cookieVal,
                        //   ProjectName: this.ProjectName,
                        //   versionName: versionBank[indexV].VersionName,
                        //   ProjectModelName: versionBank[indexV].MqBank[oldIndexM].ProjectModelName,
                        //   newContent: {"#modal1":chaosModal["#modal1"]}}).then((data:any)=>{
                        //     console.log(data)
                        //     // console.log(data)
                        //     // counter++
                        //     // console.log(counter)
                        //   })
        
                        
                        // closeModal(modal)

                      })
                      
                  
                  document.getElementById("puce3File"+index).addEventListener("change",()=>{
                    readURLImg(document.getElementById("puce3File"+index),index)
                  })
                  
                  
                  
                }
                buttonManager()
                modalManager(startingPoints)










                
                for (let indexM = 0; indexM < versionBank[indexV].MqBank.length; indexM++) {
                  
                  
                  const elementM = versionBank[indexV].MqBank[indexM];
                  
                  $(".flex-vertical-button-container").append("<div><button style='box-shadow: 3px 4px 0px 0px #1564ad;background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);background-color:#79bbff;border-radius:5px;border:1px solid #337bc4;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;font-weight:bold;padding:10px 16px;text-decoration:none;text-shadow:0px 1px 0px #528ecc;' mat-flat-button id='mqButton"+indexM+"' style='padding: 10px 16px;margin: 5px;'>"+versionBank[indexV].MqBank[indexM].ProjectModelName+"</button></div>")
                  




                  


                  //button clicker for model buttons
                  $(document).on("click","#mqButton"+indexM,(ee)=>{
                    
                    $("#points-list").empty()
                    $("#hidden-modals").empty()

                    
                    
                    
                    
                    var indexValueM = parseInt(ee.target.id[ee.target.id.length -1])
                    // console.log("the number of this model is: "+indexValueM)
                    // console.log("the number of this versions is: "+indexValueV)
                    
                    // console.log("number of points for the model number:",indexValueM,"is ",numberOfPoints)
                    
                    
                    // console.log("oldIndicator value: ",ee.target.id,versionBank[indexValueV].MqBank[indexValueM].numberOfPuces)
                    var startingPoints = []
                    var ix=0
                    for (let index in versionBank[indexValueV].MqBank[indexValueM].annotations) {
                      if(isUndefined(versionBank[indexValueV].MqBank[indexValueM].annotations[index].start))
                      {
                        versionBank[indexValueV].MqBank[indexValueM].annotations[index].start = ""
                      }
                      if(isUndefined(versionBank[indexValueV].MqBank[indexValueM].annotations[index].node.html))
                      {
                        versionBank[indexValueV].MqBank[indexValueM].annotations[index].node.html = ""
                      }


                      console.log(versionBank[indexValueV].MqBank[indexValueM].annotations[index].start)
                      startingPoints[ix]=(versionBank[indexValueV].MqBank[indexValueM].annotations[index].start)
                      console.log(versionBank[indexValueV].MqBank[indexValueM].annotations[index].node.html)
                      ix++
                    }

                    console.log("the starting points are ",startingPoints)

                    if(isUndefined(collector))
                    {
                      collector = {}
                    }
                    if(isUndefined(versionBank[indexValueV].MqBank[oldIndexM].annotations))
                    {
                      versionBank[indexValueV].MqBank[oldIndexM].annotations = {}
                    }
                    indexMIndicator = indexValueM
                    //get the collector and save it into the annotation of the old object
                    versionBank[indexValueV].MqBank[oldIndexM].annotations = collector
                    //same for the number of puces
                    versionBank[indexValueV].MqBank[oldIndexM].numberOfPuces = Object.keys(collector).length
                     console.log("old model: ",versionBank[indexValueV].MqBank[oldIndexM].ProjectModelName)
                     console.log("new model: ",versionBank[indexValueV].MqBank[indexValueM].ProjectModelName)
                     console.log("old annotations: ",versionBank[indexValueV].MqBank[oldIndexM].annotations)
                     console.log("new annotations: ",versionBank[indexValueV].MqBank[indexValueM].annotations)
                     console.log("old index: ",oldIndexM)
                     console.log("new index: ",indexValueM)
                     console.log(indexValueM)

                    var counter = 0
                    this.auth.onUpdateOneModel(
                      {email: this.cookieVal,
                      ProjectName: this.ProjectName,
                      versionName: versionBank[indexValueV].VersionName,
                      ProjectModelName: versionBank[indexValueV].MqBank[oldIndexM].ProjectModelName,
                      newAnnotations: collector,
                      newNumberOfPuces: Object.keys(collector).length}).then((data:any)=>{
                        // console.log(data)
                        // counter++
                        // console.log(counter)
                      })
                      if(isUndefined(versionBank[indexValueV].MqBank[indexValueM].annotations))
                      {
                        versionBank[indexValueV].MqBank[indexValueM].annotations = {}
                      }
                      //update the collector for the new version after the update of the database
                      collector = versionBank[indexValueV].MqBank[indexValueM].annotations
                      console.log("the updated collector from the local storage is: ", collector)

                      //update the number of points after the database update
                      //if it is greater than 0, add +1 to negate the overlapping effect of the collector
                      ChangeButtosNumber = versionBank[indexValueV].MqBank[indexValueM].numberOfPuces 
                      if(numberOfPoints>0)
                      {
                        numberOfPoints = versionBank[indexValueV].MqBank[indexValueM].numberOfPuces +1
                      }
                      else
                      {
                        numberOfPoints = versionBank[indexValueV].MqBank[indexValueM].numberOfPuces 
                      }
                      
                      oldIndexM = indexValueM
                      currentMq = versionBank[indexValueV].MqBank[indexValueM].source
                      showPuces(versionBank[indexValueV].MqBank[indexValueM].annotations,1)
                      for (let index = 0; index < ChangeButtosNumber; index++) {
                        //number of points should be upgraded for future use
                        console.log("adding modals")
                        $("#hidden-modals").append("<div class='modal' id='modal"+index+"'><div class='modal-header' id='modalHeader'><div class='title' style='font-size: 1.25rem;' id='originalTitle"+index+"'>Example Modal "+index+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '><div id='originalDescription"+index+"'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis labore nisi maiores natus laborum, repellat nihil velit et quisquam laboriosam vel itaque ab maxime. Perferendis, itaque dolor non reprehenderit, recusandae obcaecati, sapiente illum at iure atque minus labore eius adipisci aliquam ratione temporibus cupiditate libero dolorem distinctio beatae veritatis aperiam. Dolor explicabo, voluptates atque soluta dolorem alias minus nisi necessitatibus quidem inventore modi eligendi similique, aliquam eius corrupti quisquam! Eaque nam nisi expedita. Numquam autem molestias quaerat illo. Sunt?</div><img class='originalPic' id='originalPuceImage"+index+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /></div></div>")
                      }
                      
                      
                      buttonManager()
                      //this "for" loop will remove the old event listeners from the saving button and from the picture in the change modals
                      for (let index = 0; index < ChangeButtosNumber; index++) {
                        console.log("removing "+index)
                        const savingButton1 = document.getElementById("savingButton"+index+"")
                        
                        if(savingButton1)
                        {
                          savingButton1.removeEventListener("click",()=>console.log("removed event listener from saving button number: ",index))
                        }
                        
                        const PicChange = document.getElementById("puce3File"+index)

                        if(PicChange)
                        {
                          PicChange.removeEventListener("change",()=>console.log("removed event listener from Pic number: ",index))
                        }
                        
                      }
                      //then we add the event listeners of the new buttons
                      var chaosModal = {}
                      var chaosModalIndex = 0
                      for (let index = 0; index < ChangeButtosNumber; index++) {
                        console.log("adding "+index)
                        $("#hidden-modals").append("<div class='modal' id='ChangeModal"+index+"'><div class='modal-header' id='ChangeModalHeader'><div class='title' style='font-size: 1.25rem;'>Change Modal "+index+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '>Puce title: <input type='text' id='puceTitleForChange"+index+"'><br><br>Puce description (optional): <br><textarea name='' id='changeDescription"+index+"' cols='30' rows='10'></textarea><br>Puce Picture:<input type='file' id='puce3File"+index+"' ><img class='ChangePic' id='changePuceImage"+index+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /><br><button id='savingButton"+index+"'>save</button></div></div>")
                        $("#points-list").append("<button data-modal-target='#ChangeModal"+index+"'>change modal"+index+"</button>")
                        const savingButton1 = document.getElementById("savingButton"+index+"")
                        savingButton1.addEventListener("click",()=>{
                            chaosModal = {}
                            $("#originalDescription"+index+"").text($("#changeDescription"+index+"").val())
                            //console.log($("#originalDescription"+index+""))
                            //console.log($("#changeDescription"+index+"").text())
                            $("#originalTitle"+index+"").text($("#puceTitleForChange"+index+"").val())
                            const modal = savingButton1.closest('.modal')
                            console.log("open Modal",modal)
                            openModal(modal)
                            const Modal = document.querySelectorAll('[data-modal-target]')
                            Modal.forEach(button =>{
                              
                              //console.log(button)
                              chaosModalIndex++
                              const modal = document.querySelector(button.getAttribute("data-modal-target"))
                              var attribName: string = button.getAttribute("data-modal-target")
                              if(modal)
                              {
                                
                                console.log(attribName)
                                var ContentHTMLCode = modal.outerHTML
                                chaosModal[attribName] =  ContentHTMLCode

                              }
                              
                              // chaoticCollector[chaosIndex] = modal
                              
                              })
                              console.log({"#modal1":chaosModal["#modal1"]})
                              this.auth.onUpdateOneModelContent(
                                {email: this.cookieVal,
                                ProjectName: this.ProjectName,
                                versionName: versionBank[indexV].VersionName,
                                ProjectModelName: versionBank[indexV].MqBank[oldIndexM].ProjectModelName,
                                newContent: {"#modal1":chaosModal["#modal1"]}}).then((data:any)=>{
                                  console.log(data)
                                  // console.log(data)
                                  // counter++
                                  // console.log(counter)
                                })
              
                              
                              closeModal(modal)

                            })
                            
                        
                        document.getElementById("puce3File"+index).addEventListener("change",()=>{
                          readURLImg(document.getElementById("puce3File"+index),index)
                        })
                        
                        
                        
                      }
                      buttonManager()
                      modalManager(startingPoints)
                      
                  })

                }

                
            })
            
          }




      })
        

      
    }
    )
    

    this.service.currentProject.subscribe(message => this.VersionBankGeneral = message)
    this.service.changeMessage(versionBank)

    this.onDataGet()
    var startingFrame =0
    var pointOfInterest = {}
    var numberOfPoints = 0;
    var collector = {}
    var Integrate=false
    var showP = true
    var seen = false
    var i = 1
    // $("#show-puces").click((e)=>{
    //   i++;
    //   $("#Integration-puce").attr('disabled', showP);
    //   if(i%2==0) {
    //       $("#show-puces-button").html("+")
    //       showNoPuces()
    //       seen = false
    //   }
    //   else{
    //   modalManager()
    //       showPuces(collector,startingFrame)
    //       $("#show-puces-button").html("-")
    //   }
    //   showP =!showP
    //   console.log(showP)

    // })
    //img test
    let readURLImg = (input,number) => {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          console.log(input.files)

          reader.onload = function (e) {
            //console.log($("#originalPuceImage"+number).attr('src'))
              $("#originalPuceImage"+number)
                  .attr('src', e.target.result);
              //console.log($("#originalPuceImage"+number).attr('src'))
              $("#changePuceImage"+number)
                  .attr('src', e.target.result);
          };

          reader.readAsDataURL(input.files[0]);
      }
  }

    function openModal(modal){
      if(modal==null) return
      console.log("opening modal")
      modal.classList.add("active")
      $(".modal").resizable()
      $(".modal").draggable()
      $(".originalPic").resizable()
      $(".ChangePic").resizable()
    }
    function closeModal(modal){
      if(modal==null) return
      modal.classList.remove("active")
    }
    $("#Integration-puce").click((e)=>{
      
      Integrate=!Integrate
      // if(Integrate)
      // {
      //   $("#Integration-puce").css("background-color", "red")
      // }
      // else{
      //   $("#Integration-puce").css("background-color", "white")
      //   $("#Integration-puce").css("background-color", "white")
      // }
      console.log(Integrate)
    })
    var showNoPuces = ()=>{
      $("#my_picture").reel({
                  images: currentMq,
                  frames: 104,
                  frame: 1
      }
          )
    }
    function changeM (){
      console.log("hi")
    }
    //models sources
    var ImgBank1 = {}

    ImgBank1[0] = {
      "source":"http://www.hoopp.fr/maquette/BELZ/iframe/BELZ/BELZ/images/lv1/n1-##.jpg|01..118",
      "annotations":{},
      "numberOfPuces": 0
    }
    ImgBank1[1] = {
      "source":"http://www.hoopp.fr/maquette/BELZ/iframe/BELZ/BELZ/images/lv1/n2-##.jpg|01..118",
      "annotations":{},
      "numberOfPuces": 0
    }
    ImgBank1[2] = {
      "source":"http://www.hoopp.fr/maquette/BELZ/iframe/BELZ/BELZ/images/lv1/n3-##.jpg|01..118",
      "annotations":{},
      "numberOfPuces": 0
    }
    ImgBank1[3] = {
      "source":"http://www.hoopp.fr/maquette/BELZ/iframe/BELZ/BELZ/images/lv1/n4-##.jpg|01..118",
      "annotations":{},
      "numberOfPuces": 0
    }
    ImgBank1[4] = {
      "source":"http://www.hoopp.fr/maquette/BELZ/iframe/BELZ/BELZ/images/lv1/n5-##.jpg|01..118",
      "annotations":{},
      "numberOfPuces": 0
    }

    var ImgBank2 = {}
    ImgBank2[0] = {
      "source":"assets/BELZ_FACADES_HTML/images/lv1/img##.jpg",
      "annotations":{},
      "numberOfPuces": 0
    }

    //versions
    var versionBank = []
    // versionBank[0]= {
    //   "MqNumber": 5,
    //   "MqBank": ImgBank1
    // }
    // versionBank[1]= {
    //   "MqNumber": 1,
    //   "MqBank": ImgBank2
    // }



    var currentMq :any

    var showPuces = (collector,startingFrame)=>{
      $("#my_picture").reel({
                  images: currentMq,
                  frames: 104,
                  frame: startingFrame,
                      annotations: collector
                  }
          )
    }
    var chaoticCollector = {}
    // var chaosIndex = 0
    var startingPoints = []
    var modalManager = (startingPoints)=>{
      const openModalButton = document.querySelectorAll('[data-modal-target]')
          console.log(openModalButton)
          const closeModalButton = document.querySelectorAll('[data-modal-close]')

          openModalButton.forEach(button =>{
            console.log(button)
              button.addEventListener("click",(e)=>{
                  // chaosIndex++
                  const modal = document.querySelector(button.getAttribute("data-modal-target"))
                  // chaoticCollector[chaosIndex] = modal
                  console.log("open Modal",modal,"with button")

                  if(button.getAttribute("data-modal-target").includes("ChangeModal"))
                  {
                    var pointnumber = parseInt(button.getAttribute("data-modal-target")[button.getAttribute("data-modal-target").length -1])
                    $("#my_picture").reel("frame",startingPoints[pointnumber])
                    console.log(button.getAttribute("data-modal-target")+"now will go to ",startingPoints[pointnumber]," and "+pointnumber)
                    
                  }

                  


                  
                  openModal(modal)

              })
          })
          closeModalButton.forEach(button =>{
              button.addEventListener("click",()=>{
                  const modal = button.closest('.modal')
                  closeModal(modal)
              })
          })
    }
    var buttonManager = () =>{
      const openModalButton = document.querySelectorAll('[data-modal-target]')
      //console.log(openModalButton)
      const closeModalButton = document.querySelectorAll('[data-modal-close]')
      openModalButton.forEach(button =>{
        button.removeEventListener("click",()=>console.log("removed"))
      })
      closeModalButton.forEach(button =>{
          button.removeEventListener("click",()=>console.log("removed"))
      })
    }
    var pointannotation = (myPoint,startingFramer,posx,posy,pointNumber)=>{
      posx =posx/1200*100
      posy =posy/800*100
      pointOfInterest[myPoint] = {
          node: {html: "<button style='cursor: pointer;border: none;outline: none;background: none;' data-modal-target='#modal"+pointNumber+"' style='cursor: pointer'><img width='25px' height='25px' src='./assets/1200px-Target_Corporation_logo_(vector).svg.png' /></button>", css:{width:100}},

          start: startingFramer-1,
          end: startingFramer+1,
          x: posx+"%",
          y: posy+"%"
      }
      return pointOfInterest[myPoint]
  }
    $("#my_picture").trigger("play").bind('frameChange', function(e, depr_frame, frame){

      startingFrame = frame;
      //$(this).reel("frame",frame) ;
      //console.log(frame)
      //console.log(typeof(frame))
      //console.log(depr_frame)
    })

    //Basic animation
    $("#my_picture").reel({
      images: currentMq,
      frames: 104,
      frame: 1
      }


    )

    //integration d'etit puce = half done
    //integration de previsualisation = not done
    //sauvegarde des puces = done
    //importation des puce d'un version a une autre (meme maquete) = not done
    //integration d'une maquette 2 = not done




      var ModalCollector = {}
      var currentVer
      var currentNumberOfMq
      var numberOfMq :any
      currentNumberOfMq = numberOfMq
      var currentMqNumber = 0
      /*document.getElementById("saving-button").addEventListener("click",()=>{
        console.log(collector,currentMqNumber)

        console.log("saved")

        console.log(currentVer.MqBank[currentMqNumber])

      })*/

      //the creator
      /*var creator = (indexV)=>{
        var v = confirm("if you switch models without saving, you will lose all unsaved points")
        if(v ==true)
        {
        currentVer = versionBank[indexV]

        currentMq = currentVer.MqBank[0].source
        console.log(currentVer)
        showPuces(currentVer.MqBank[0].annotations,1)
        $(".flex-vertical-button-container").empty()
        $("#points-list").empty()
        $("#hidden-modals").empty()
        numberOfPoints = 0
        for (let indexM = 0; indexM < currentNumberOfMq; indexM++) {
          currentNumberOfMq = currentVer.MqNumber

          $(".flex-vertical-button-container").append("<div><button id='mqButton"+indexM+"' style='padding: 10px 16px;margin: 5px;'>Mq-"+indexM+"</button></div>")
          document.getElementById("mqButton"+indexM).addEventListener("click",()=>{
            //console.log("this model contains these annotations :",currentVer.MqBank[indexM].annotations)
            console.log("hi from model number"+indexM)
            console.log("number of points is ",currentVer.MqBank[indexM].numberOfPuces)

            //numberOfPoints = 0

            var r = confirm("if you switch models without saving, you will lose all unsaved points")
            if(r ==true)
            {
              $("#points-list").empty()
              $("#hidden-modals").empty()
              currentVer.MqBank[currentMqNumber].annotations = collector
              currentVer.MqBank[currentMqNumber].numberOfPuces = numberOfPoints
              console.log("there is",currentMqNumber)
              currentMq = currentVer.MqBank[indexM].source

              currentMqNumber = indexM
              console.log("there is",currentMqNumber)
              console.log("before moving, collector in model number ",indexM," is :",collector)
              console.log("before moving, currentVer.MqBank[indexM].annotations in model number "+indexM+" is :",currentVer.MqBank[indexM].annotations)
              collector = currentVer.MqBank[indexM].annotations
              console.log("number of puces from indexM is ",currentVer.MqBank[indexM].numberOfPuces)
              console.log("number of puces from currentMqNumber is ",currentVer.MqBank[currentMqNumber].numberOfPuces)
              numberOfPoints = currentVer.MqBank[indexM].numberOfPuces
              console.log("after moving, collector in model number "+indexM+" is :",collector)
              console.log("after moving, currentVer.MqBank[indexM].annotations in model number "+indexM+" is :",currentVer.MqBank[indexM].annotations)
              //currentVer.MqBank[indexM].annotations = collector

              showPuces(currentVer.MqBank[indexM].annotations,1)
            }
            else
            {
            }
          })
      }}
      else{}
    }*/
    if($( ".modal active" ).length )
    {

      console.log("a modal exist")
    }

    //   $(document).ready(()=>{
    //     for (let indexM = 0; indexM < currentNumberOfMq; indexM++) {
    //       currentNumberOfMq = currentVer.MqNumber

    //       $(".flex-vertical-button-container").append("<div><button id='mqButton"+indexM+"' style='padding: 10px 16px;margin: 5px;'>Mq-"+indexM+"</button></div>")


    //       document.getElementById("mqButton"+indexM).addEventListener("click",()=>{
    //         //console.log("this model contains these annotations :",currentVer.MqBank[indexM].annotations)
    //         //console.log("hi from model number"+indexM)
    //         //console.log("number of points is ",currentVer.MqBank[indexM].numberOfPuces)

    //         //numberOfPoints = 0



    //           $("#points-list").empty()
    //           $("#hidden-modals").empty()
    //           currentVer.MqBank[currentMqNumber].annotations = collector
    //           currentVer.MqBank[currentMqNumber].numberOfPuces = numberOfPoints
    //           //console.log("there is",currentMqNumber)
    //           currentMq = currentVer.MqBank[indexM].source

    //           currentMqNumber = indexM


    //           //console.log("there is",currentMqNumber)
    //           //console.log("before moving, collector in model number ",indexM," is :",collector)
    //           //console.log("before moving, currentVer.MqBank[indexM].annotations in model number "+indexM+" is :",currentVer.MqBank[indexM].annotations)
    //           collector = currentVer.MqBank[indexM].annotations
    //           versionBank[0] = currentVer
    //           //console.log(currentVer.MqBank[indexM].annotations)
    //           //console.log(this.VersionBankGeneral)

    //           //console.log("number of puces from indexM is ",currentVer.MqBank[indexM].numberOfPuces)
    //           //console.log("number of puces from currentMqNumber is ",currentVer.MqBank[currentMqNumber].numberOfPuces)
    //           numberOfPoints = currentVer.MqBank[indexM].numberOfPuces
    //           if(numberOfPoints != 0){
    //             $("#hidden-modals").append("<div class='modal' id='modal"+numberOfPoints+"'><div class='modal-header' id='modalHeader'><div class='title' style='font-size: 1.25rem;' id='originalTitle"+numberOfPoints+"'>Example Modal "+numberOfPoints+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '><div id='originalDescription"+numberOfPoints+"'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis labore nisi maiores natus laborum, repellat nihil velit et quisquam laboriosam vel itaque ab maxime. Perferendis, itaque dolor non reprehenderit, recusandae obcaecati, sapiente illum at iure atque minus labore eius adipisci aliquam ratione temporibus cupiditate libero dolorem distinctio beatae veritatis aperiam. Dolor explicabo, voluptates atque soluta dolorem alias minus nisi necessitatibus quidem inventore modi eligendi similique, aliquam eius corrupti quisquam! Eaque nam nisi expedita. Numquam autem molestias quaerat illo. Sunt?</div><img class='originalPic' id='originalPuceImage"+numberOfPoints+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /></div></div>")
    //             $("#hidden-modals").append("<div class='modal' id='ChangeModal"+numberOfPoints+"'><div class='modal-header' id='ChangeModalHeader'><div class='title' style='font-size: 1.25rem;'>Change Modal "+numberOfPoints+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '>Puce title: <input type='text' id='puceTitleForChange"+numberOfPoints+"'><br><br>Puce description (optional): <br><textarea name='' id='changeDescription"+numberOfPoints+"' cols='30' rows='10'></textarea><br>Puce Picture:<input type='file' id='puce3File"+numberOfPoints+"' ><img class='ChangePic' id='changePuceImage"+numberOfPoints+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /><br><button id='savingButton"+numberOfPoints+"'>save</button></div></div>")
    //             $("#points-list").append("<button data-modal-target='#ChangeModal"+numberOfPoints+"'>change modal"+numberOfPoints+"</button>")
    //           }

    //           //console.log("after moving, collector in model number "+indexM+" is :",collector)
    //           //console.log("after moving, currentVer.MqBank[indexM].annotations in model number "+indexM+" is :",currentVer.MqBank[indexM].annotations)
    //           //currentVer.MqBank[indexM].annotations = collector

    //           showPuces(currentVer.MqBank[indexM].annotations,1)


    //       })
    //   }

    //     for (let indexV = 0; indexV < versionBank.length; indexV++) {
    //       $(".flex-horizontal-button-container").append("<div style='z-index: 20;margin: 10px;text-align: center;line-height: 50px;font-size: 50px;border: 1px;'><button id='VerButton"+indexV+"' style='padding: 10px 16px;'>v"+indexV+"</button></div>")
          
    //       $(document).on("click","#VerButton"+indexV,()=>{
    //         console.log("hello ")

    //         currentVer = versionBank[indexV]

    //         currentMq = currentVer.MqBank[0].source
    //         console.log(currentVer)
    //         showPuces(currentVer.MqBank[0].annotations,1)
    //         $(".flex-vertical-button-container").empty()
    //         $("#points-list").empty()
    //         $("#hidden-modals").empty()
    //         numberOfPoints = 0
    //         for (let indexM = 0; indexM < currentNumberOfMq; indexM++) {
    //           currentNumberOfMq = currentVer.MqNumber

    //           $(".flex-vertical-button-container").append("<div><button id='mqButton"+indexM+"' style='padding: 10px 16px;margin: 5px;'>Mq-"+indexM+"</button></div>")


    //           document.getElementById("mqButton"+indexM).addEventListener("click",()=>{
    //             //console.log("this model contains these annotations :",currentVer.MqBank[indexM].annotations)
    //             //console.log("hi from model number"+indexM)
    //             //console.log("number of points is ",currentVer.MqBank[indexM].numberOfPuces)document.getElementById("puce3File"+numberOfPoints).addEventListener("change",()=>{
            
    //               $("#points-list").emptymodalManager()ntMqNumber].numberOfPuces = numberOfPoints
    //               //console.log("there is",currentMqNumber)
    //               currentMq = currentVer.MqBank[indexM].source

    //               currentMqNumber = indexM


    //               //console.log("there is",currentMqNumber)
    //               //console.log("before moving, collector in model number ",indexM," is :",collector)
    //               //console.log("before moving, currentVer.MqBank[indexM].annotations in model number "+indexM+" is :",currentVer.MqBank[indexM].annotations)
    //               collector = currentVer.MqBank[indexM].annotations
    //               versionBank[indexV] = currentVer
                  
                  
    //               //console.log(currentVer.MqBank[indexM].annotations)
    //               //console.log(this.VersionBankGeneral)

    //               //console.log("number of puces from indexM is ",currentVer.MqBank[indexM].numberOfPuces)document.getElementById("puce3File"+numberOfPoints).addEventListener("change",()=>{
            
    //                 $("#hidden-modals").append("<divhidden-modalsntVer.MqBank[indexM].annotations in model number "+indexM+" is :",currentVer.MqBank[indexM].annotations)
    //               //currentVer.MqBank[indexM].annotations = collector

    //               showPuces(currentVer.MqBank[indexM].annotations,1)


    //           })
    //       }

    //     })

    //   }
    // })

      $("#mqButton").click(()=>{
        console.log("hi")
      })


    $('#my_picture').click(function (e) {
  
      if(Integrate && showP)

      {
          
          //Mq-buttons
          $("#points-list").append("<button data-modal-target='#ChangeModal"+numberOfPoints+"'>change modal"+numberOfPoints+"</button>")
          //Changing modal appendage
          $("#hidden-modals").append("<div class='modal' id='ChangeModal"+numberOfPoints+"'><div class='modal-header' id='ChangeModalHeader'><div class='title' style='font-size: 1.25rem;'>Change Modal "+numberOfPoints+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '>Puce title: <input type='text' id='puceTitleForChange"+numberOfPoints+"'><br><br>Puce description (optional): <br><textarea name='' id='changeDescription"+numberOfPoints+"' cols='30' rows='10'></textarea><br>Puce Picture:<input type='file' id='puce3File"+numberOfPoints+"' ><img class='ChangePic' id='changePuceImage"+numberOfPoints+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /><br><button id='savingButton"+numberOfPoints+"'>save</button></div></div>")
          
          //Modal Appendage
          $("#hidden-modals").append("<div class='modal' id='modal"+numberOfPoints+"'><div class='modal-header' id='modalHeader'><div class='title' style='font-size: 1.25rem;' id='originalTitle"+numberOfPoints+"'>Example Modal "+numberOfPoints+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '><div id='originalDescription"+numberOfPoints+"'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis labore nisi maiores natus laborum, repellat nihil velit et quisquam laboriosam vel itaque ab maxime. Perferendis, itaque dolor non reprehenderit, recusandae obcaecati, sapiente illum at iure atque minus labore eius adipisci aliquam ratione temporibus cupiditate libero dolorem distinctio beatae veritatis aperiam. Dolor explicabo, voluptates atque soluta dolorem alias minus nisi necessitatibus quidem inventore modi eligendi similique, aliquam eius corrupti quisquam! Eaque nam nisi expedita. Numquam autem molestias quaerat illo. Sunt?</div><img class='originalPic' id='originalPuceImage"+numberOfPoints+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /></div></div>")
          //modal storage
          ModalCollector["hi"+numberOfPoints.toString()]="<div class='modal' id='modal"+numberOfPoints+"'><div class='modal-header' id='modalHeader'><div class='title' style='font-size: 1.25rem;' id='originalTitle"+numberOfPoints+"'>Example Modal "+numberOfPoints+"</div><button data-modal-close class='close-modal'>&times;</button></div><div class='modal-body' style='padding: 10px 15px; '><div id='originalDescription"+numberOfPoints+"'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis labore nisi maiores natus laborum, repellat nihil velit et quisquam laboriosam vel itaque ab maxime. Perferendis, itaque dolor non reprehenderit, recusandae obcaecati, sapiente illum at iure atque minus labore eius adipisci aliquam ratione temporibus cupiditate libero dolorem distinctio beatae veritatis aperiam. Dolor explicabo, voluptates atque soluta dolorem alias minus nisi necessitatibus quidem inventore modi eligendi similique, aliquam eius corrupti quisquam! Eaque nam nisi expedita. Numquam autem molestias quaerat illo. Sunt?</div><img class='originalPic' id='originalPuceImage"+numberOfPoints+"' width='200px' height='200px' src='http://placehold.it/180' alt='your image' /></div></div>"
          var posX = e.offsetX ,
          posY = e.offsetY;
          //console.log("posX: "+posX)
          //console.log("posY: "+posY)
          //console.log(numberOfPoints)
          collector["hi"+numberOfPoints.toString()]=pointannotation("point: "+numberOfPoints.toString(),startingFrame,posX,posY,numberOfPoints)
          //console.log(JSON.stringify(collector))
          //console.log(JSON.stringify(ModalCollector))
          showPuces(collector,startingFrame)
          const savingButton1 = document.getElementById("savingButton"+numberOfPoints+"")
          savingButton1.addEventListener("click",()=>{
              $("#originalDescription"+numberOfPoints+"").text($("#changeDescription"+numberOfPoints+"").val())
              console.log($("#originalDescription"+numberOfPoints+""))
              console.log($("#changeDescription"+numberOfPoints+"").text())
              $("#originalTitle"+numberOfPoints+"").text($("#puceTitleForChange"+numberOfPoints+"").val())

              const modal = savingButton1.closest('.modal')
              closeModal(modal)
          })
          modalManager(startingPoints)
          numberOfPoints++;
      }
      
    })
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    this.newMessage(this.VersionBankGeneral)
    console.log('Items destroyed');
    $(document).off("click")
    // var currentMq = {}
    // var collector = {}
    // var startingFrame = 1
    // var showP = true
    // var seen = true
    // var showPuces = (collector,startingFrame)=>{
    //   $("#my_picture2").reel({
    //               images: currentMq,
    //               frames: 104,
    //               frame: startingFrame,

    //                   annotations: collector
    //               }
    //       )
    // }
    // var showNoPuces = ()=>{
    //   $("#my_picture2").reel({
    //               images: currentMq,
    //               frames: 104,
    //               frame: 1
    //   }
    //       )
    // }
    // var i =1
    // $("#show-puces").click((e)=>{
    //   i++;
    //   if(i%2==0) {
    //       $("#show-puces-button").html("+")
    //       console.log("no puces")
    //       showNoPuces()
    //       seen = false
    //   }
    //   else{
    //   // modalManager()
    //       showPuces(collector,startingFrame)
    //       $("#show-puces-button").html("-")
    //   }
    //   showP =!showP
    //   console.log(showP)

    // })
  }
}
