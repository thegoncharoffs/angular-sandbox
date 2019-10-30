import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlComponent implements OnInit {

    public textField = new FormControl('', {updateOn: 'blur'});

    public value: string = 'Some text';

    constructor(cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.textField.setValue(this.value);

        this.textField.valueChanges.subscribe((value) => {
            this.value = value;
            console.log(value);
        });
    }
}
