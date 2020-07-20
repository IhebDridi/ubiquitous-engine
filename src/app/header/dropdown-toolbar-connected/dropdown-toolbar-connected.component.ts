import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DataTransferService } from 'src/app/services/data-transfer.service';
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
@Component({
  selector: 'app-dropdown-toolbar-connected',
  templateUrl: './dropdown-toolbar-connected.component.html',
  styleUrls: ['./dropdown-toolbar-connected.component.css']
})

export class DropdownToolbarConnectedComponent implements OnInit {

  
  treeControl = new NestedTreeControl<VersionNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<VersionNode>();

  constructor(private dataTRansfer : DataTransferService) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: VersionNode) => !!node.children && node.children.length > 0;

  Project = {}
  ngOnInit(): void {
    //this.dataTRansfer.currentProject.subscribe(message => this.Project = message)
  }

}
