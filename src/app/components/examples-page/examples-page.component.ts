import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'examples-page',
  templateUrl: './examples-page.component.html',
  styleUrls: ['./examples-page.component.scss']
})
export class ExamplesPageComponent implements OnInit {

  @HostBinding('class.examples-page')
  public hostClass = true;

  constructor() { }

  ngOnInit() {
  }

}
