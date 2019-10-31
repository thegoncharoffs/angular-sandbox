import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-form-group',
    templateUrl: './form-group.component.html',
    styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
    public profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
    }, { validators: [Validators.required], updateOn: 'blur' });

    public ngOnInit(): void {
        this.profileForm.valueChanges.subscribe(value => {
            console.log('Form Value: ', value);
        });
        this.profileForm.controls['firstName'].valueChanges.subscribe(value => {
            console.log('First Name: ', value);
            console.log('Value of First Name lags in Form: ', this.profileForm.value['firstName']);
        });
    }
}
