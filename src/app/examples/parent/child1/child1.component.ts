import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ContentChild} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, AfterViewInit, OnDestroy {
  @ContentChild('divElement', {static: false})
  public divElement: ElementRef;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    console.log('Child1: ', this.divElement && this.divElement.nativeElement);
  }

  public ngOnDestroy(): void {

  }
}
