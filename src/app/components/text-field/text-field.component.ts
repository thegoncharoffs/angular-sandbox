import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
    styleUrls: ['./text-field.component.scss'],
    host: {'class': 'app-text-field'},
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: TextFieldComponent,
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldComponent implements ControlValueAccessor {

    @Input()
    public value: string;

    @Input()
    public disabled: boolean;

    @Output()
    public blur: EventEmitter<Event> = new EventEmitter();

    @Output()
    public focus: EventEmitter<Event> = new EventEmitter();

    /** @internal */
    public _input(event: Event) {
        this.value = (<HTMLInputElement> event.target).value;
        this.propagateChange(this.value);
    }

    /** @internal */
    public _focus(event: Event) {
        this.focus.emit(event);
        this.propagateTouch();
    }

    /** @internal */
    public _blur(event: Event) {
        this.blur.emit(event);
        this.propagateTouch();
    }

    constructor(public cdr: ChangeDetectorRef) {
    }

    /** @internal
     *  Only for ControlValueAccessor implementation
     */
    public propagateChange: Function;

    /** @internal
     *  Only for ControlValueAccessor implementation
     */
    public propagateTouch: Function;

    /** @internal
     *  Only for ControlValueAccessor implementation
     */
    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /** @internal
     *  Only for ControlValueAccessor implementation
     */
    public registerOnTouched(fn: any): void {
        this.propagateTouch = fn;
    }

    /** @internal
     *  Only for ControlValueAccessor implementation
     */
    public writeValue(value: any): void {
        this.value = value;
        this.cdr.markForCheck();
    }

    /** @internal
     *  Only for ControlValueAccessor implementation
     */
    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
}
