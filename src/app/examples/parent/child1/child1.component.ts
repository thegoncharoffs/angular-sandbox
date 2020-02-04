import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  @Input()
  public template: TemplateRef<any>;

  public context = {
    value1: 'Hello1',
    value2: 'Hello2'
  };

  public someText = 'Some Text2';
}
