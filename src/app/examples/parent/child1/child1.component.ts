import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ContentChild,
  Input,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, AfterViewInit, OnDestroy {
  @ContentChild('divElement', {static: false})
  public divElement: ElementRef;

  @Input()
  public template: TemplateRef<any>;

  public ctx = {value: 'value'};

  public someText = 'Some Text2';

  constructor() {
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    // console.log('Child1: ', this.divElement && this.divElement.nativeElement);
  }

  public ngOnDestroy(): void {

  }
}
