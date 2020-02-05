import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormArrayComponent implements OnInit {

    public profileForm;

    constructor(private formBuilder: FormBuilder) {
    }

    // How to get FormArray from FormGroup
    get aliases() {
        return this.profileForm.get('aliases') as FormArray;
    }

    public ngOnInit(): void {
        this.profileForm = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            aliases: this.formBuilder.array([
                this.formBuilder.control('First control')
            ])
        }, {validators: [Validators.required], updateOn: 'blur'});

        this.profileForm.valueChanges.subscribe((data) => {
            console.log(data);
        });
    }

    public _addAlias() {
        this.aliases.push(this.formBuilder.control('Added control'));
    }

}
