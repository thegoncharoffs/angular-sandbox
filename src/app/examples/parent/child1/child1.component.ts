import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements AfterViewInit {
  @Input()
  public value: string = 'Initial value';
  @Input()
  public template: TemplateRef<any>;

  @ContentChild('divElement')
  public divElement: ElementRef;

  public ngAfterViewInit(): void {
    this.value = 'Another Value';
    console.log(this.value);
    console.log('Child1: ', this.divElement?.nativeElement);
  }

  public context = {
    value1: 'Hello1',
    value2: 'Hello2'
  };

  public someText = 'Some Text2';
}
