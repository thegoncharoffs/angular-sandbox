import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tab-panel-item',
  templateUrl: './tab-panel-item.component.html',
  styleUrls: ['./tab-panel-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabPanelItemComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  @HostBinding('class._selected')
  public selected: boolean = false;

  @HostBinding('class.tab-panel-item')
  public hostClass = true;

  constructor(public cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

}
