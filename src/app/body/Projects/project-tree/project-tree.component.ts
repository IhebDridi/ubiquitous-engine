import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { SwitchUrlService } from '../../../services/switch-url.service'
import { DomSanitizer } from '@angular/platform-browser';


interface ProjectNode {
  name: string,href:string;
  children?: ProjectNode[];
}

const TREE_DATA: ProjectNode[] = [
  {
    name: 'Project: First Project',
    children: [
      {name: 'vue maquette:',
      children: [
        {name: 'model: vue pieton',href:"http://www.hoopp.fr/maquette/BELZ/iframe/BELZ_FACADES/belz_facades.html"},
        {name: 'model: vue aerienne',href:"http://www.hoopp.fr/maquette/BELZ/iframe/BELZ/belz.html"},
        {name: 'model: vue geospherique',href:""},
      ],href:""
      },
      {name: 'puce:',
      children: [
        {name: 'puce: puce1',href:""},
        {name: 'puce: puce2',href:""},
        {name: 'model: puce3',href:""}
      ],href:""
      },
      {name: 'version:',
      children: [
        {name: 'version1: first attempt',href:""},
        {name: 'version2:second attempt',href:""},
        {name: 'version3: third attempt',href:""},

      ],href:""
      },
    ],href:""
  },   {
    name: 'Project: Second Project',
    children: [
      {name: 'version: a version of ***',
      children: [
        {name: 'model: model1',href:""},
        {name: 'model: model2',href:""},
        {name: 'model: model3',href:""}
      ],href:""
      },
      {name: 'version: version named ...',
      children: [
        {name: 'model: model1',href:""},
        {name: 'model: model2',href:""},
        {name: 'model: model3',href:""}
      ],href:""
      },
      {name: 'version: vervs',
      children: [
        {name: 'model: model of version3',href:""},

      ],href:""
      },
    ],href:""
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  href: string;
  level: number;
}

@Component({
  selector: 'app-project-tree',
  templateUrl: './project-tree.component.html',
  styleUrls: ['./project-tree.component.css']
})
export class ProjectTreeComponent implements OnInit {

  private _transformer = (node: ProjectNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      href: node.href,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private switcheroo:SwitchUrlService,private sanitizer: DomSanitizer) {
    this.dataSource.data = TREE_DATA;
  }
  ActualUrl;
  Child_message : string;
  logNode(node)
  {

    console.log(node.href+" from child")
    this.switcheroo.changeMessage(node.href)
    this.ActualUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(node.href);
    console.log(this.ActualUrl)

  }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(){
    this.switcheroo.currentMessage.subscribe(message => this.ActualUrl = this.sanitizer.bypassSecurityTrustResourceUrl(message))

  }
}
