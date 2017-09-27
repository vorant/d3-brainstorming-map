import { Injectable } from '@angular/core';

@Injectable()
export class DataMockService {

  constructor() { }

  data = {
    "name": "Rect",
    "radius": 0,
    "children": [
      {
        "name": "Circle",
        "radius": 0,
        "children": [
          {
            "name": "Hexagon",
            "radius": 0,
            "children": [
              {
                "name": "Triangle long long long long long long name",
                "radius": 0,
                "children": [
                  {
                    "name": "Start",
                    "radius": 0,
                    "children": [
                      {
                        "name": "Pentagon",
                        "radius": 0,
                        "children": [],
                        "node_id": 6,
                        "closed": false
                      }
                    ],
                    "node_id": 5,
                    "closed": false
                  }
                ],
                "node_id": 4,
                "closed": false
              }
            ],
            "node_id": 3,
            "closed": false
          }
        ],
        "node_id": 2,
        "closed": false
      }
    ],
    "node_id": 1,
    "closed": false
  }

}
