import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnChanges, OnInit, AfterViewInit {

  @Input()
  public value: string;

  @Input()
  public visible: boolean;

  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  public ngOnInit(): void {
    console.log('ngOnInit');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
}
