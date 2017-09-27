import {Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {BrainstormingMapService} from "./brainstorming-map.service";
import {BrainstormingMap} from "./brainstorming-map-module/brainstorming-map";

import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-brainstorming-map',
  templateUrl: './brainstorming-map.component.html',
  styleUrls: ['./brainstorming-map.component.css'],
  providers: [
    BrainstormingMapService
  ]
})
export class BrainstormingMapComponent implements OnInit, AfterViewInit {
  @ViewChild('brainstormingMap') elem: ElementRef;
  mapId = 'brainstorming-map-id';
  map: BrainstormingMap;
  keyword: string;

  public invokeEvent:Subject<any> = new Subject();

  constructor(brainstormingMapService: BrainstormingMapService) { }

  ngOnInit() {
    this.invokeEvent.subscribe((value) => {
      switch (value) {
        case 'rect':
          break;
        case 'circle':
          break;
        case 'hexagon':
          break;
        case 'triangle':
          break;
        case 'star':
          break;
        case 'pentagon':
          break;
      }
    });
  }

  ngAfterViewInit() {
    const demoData = {
      "name": "Topic text",
      "radius": 0,
      "children": [
        {
          "name": "Related node 1",
          "radius": 0,
          "children": [],
          "node_id": 2,
          "closed": false
        },
        {
          "name": "Related node 2",
          "radius": 0,
          "children": [],
          "node_id": 3,
          "closed": false
        }
      ],
      "node_id": 1,
      "closed": false
    };
    const paddings = 20;
/*
    const width = this.elem.nativeElement.offsetWidth - 2 * paddings;
    const height = width;
    */
    const width = 400;
    const height = 400;

    this.map = new BrainstormingMap();

    this.map.setEventObservable(this.invokeEvent);

    this.map.init(this.mapId, width, height, demoData)
  }

  addNode() {
    this.map.addNode(this.keyword);
    this.keyword = '';
  }
}
