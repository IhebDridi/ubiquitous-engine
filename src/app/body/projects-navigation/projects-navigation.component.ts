import { Component, OnInit, Input } from '@angular/core';
import { ProjectMAnagerService } from 'src/app/services/project-manager.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CookieService } from "ngx-cookie-service";
declare var $:any

@Component({
  selector: 'app-projects-navigation',
  templateUrl: './projects-navigation.component.html',
  styleUrls: ['./projects-navigation.component.css'],
  providers: [AuthServiceService]
})

export class ProjectsNavigationComponent implements OnInit {


  constructor(private ProjectManagerServicer: ProjectMAnagerService,
    private auth: AuthServiceService,
    private cookieService:CookieService) {
   }

  backgroundFade= (icon,name)=>{
    this.currentImg= icon
    this.currentProjectName= name
    this.cookieService.set("Project",this.currentProjectName)
    
    $(".proj-nav-flex-proj-picture-block").css({"border": " solid black 50px;"})
  }
  clickMe()
  {
    console.log(this.objectTest)
  }
  objectTest :any;
  cookieVal: any;
  ngOnInit(): void {

    this.cookieVal = this.cookieService.get("email")
    
    this.auth.onGetProjects({email: this.cookieVal}).then((data:any)=>{
      for (let index = 0; index < data.Projects.length; index++) {
        const ProjectName = data.Projects[index].ProjectName;
        const ProjectIcon = data.Projects[index].ProjectImage;
        console.log(ProjectName,ProjectIcon)
        this.Projects.push(
          {
            ProjectName: ProjectName,
            ProjectIcon: ProjectIcon,
            ProjectVersions: []
          }
        )
      }
      
    })







    this.auth.currentMessage.subscribe(result => {this.objectTest = result})

    var startMenu = document.getElementById("start")
    startMenu.addEventListener("click",()=>{
      this.cookieService.set("Project",this.currentProjectName)
    })

    var ModifMenu = document.getElementById("modify")
    ModifMenu.addEventListener("click",()=>{
      this.cookieService.set("Project",this.currentProjectName)
    })



    var notepad = document.getElementById("notepad");
    notepad.addEventListener("contextmenu",function(event){
      event.preventDefault();
      var ctxMenu = document.getElementById("ctxMenu");
      ctxMenu.style.display = "block";
      ctxMenu.style.left = (event.pageX - 10)+"px";
      ctxMenu.style.top = (event.pageY - 10)+"px";
  },false);
  notepad.addEventListener("click",function(event){
      var ctxMenu = document.getElementById("ctxMenu");
      ctxMenu.style.display = "";
      ctxMenu.style.left = "";
      ctxMenu.style.top = "";
  },false);

}

currentProjectName= "chose a project"
currentImg= "https://storage-asset.msi.com/global/picture/wallpaper/wallpaper_15855579545e81b1c23ba07.jpg"
Projects = []
// Projects = [{
//   ProjectName: "Project1",
//   ProjectIcon: "http://www.hoopp.fr/maquette/BELZ/iframe/BELZ/BELZ/images/lv1/n1-01.jpg",
//   ProjectVersions: []
// },
// {
//   ProjectName: "Project2",
//   ProjectIcon: "http://www.hoopp.fr/maquette/BELZ/iframe/BELZ_PAVILLONS/BELZ_PAVILLONS/images/lv1/n1-01.jpg",
//   ProjectVersions: []
// },{
//   ProjectName: "Project3",
//   ProjectIcon: "assets/BELZ_FACADES_HTML/images/lv1/img01.jpg",
//   ProjectVersions: []
// },{
//   ProjectName: "Project4",
//   ProjectIcon: "http://www.hoopp.fr/maquette/BELZ/iframe/BELZ/BELZ/images/lv1/n4-01.jpg",
//   ProjectVersions: []
// }
// ]
}
