import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public context = {
    value: 3,
    text: 'hello',
  }

}
