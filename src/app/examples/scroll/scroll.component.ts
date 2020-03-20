import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollComponent implements OnInit {

  @HostBinding('class.app-scroll-example')
  public hostClass: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
