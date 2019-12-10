import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
