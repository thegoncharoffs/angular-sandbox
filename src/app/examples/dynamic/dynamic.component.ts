import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnDestroy {
  @ViewChild("alertContainer", { read: ViewContainerRef })
  private container: ViewContainerRef;

  private componentRef: ComponentRef<AlertComponent>;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  /** @internal */
  public _createAlert(): void {
    const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.value = 'someValue';
    this.componentRef.instance.visible = true;
    this.componentRef.changeDetectorRef.detectChanges();

    setTimeout(() => {
      console.log('Ticked');
      this.componentRef.instance.value = 'anotherText';
      this.componentRef.changeDetectorRef.detectChanges();
    }, 3000);
  }

  public ngOnDestroy(): void {
    this.componentRef && this.componentRef.destroy();
  }
}
