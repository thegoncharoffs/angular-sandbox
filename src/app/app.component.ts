import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';

export interface ExamplesPageHeaderModel {
    title: string;
    children: ExamplesPageChildrenModel[];
}

export interface ExamplesPageChildrenModel {
    title: string;
    routerLink: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    @HostBinding('class.main')
    hostClass = true;

    title = 'angular-sandbox';

    /** @internal */
    public _items: ExamplesPageHeaderModel[] = [
        {
            title: 'Angular',
            children: [
                {
                    title: 'Routing',
                    routerLink: '/routing'
                },
                {
                    title: 'ng-template',
                    routerLink: '/ng-template'
                },
                {
                    title: '*ngIf',
                    routerLink: '/ng-if'
                },
                {
                    title: '*ngFor',
                    routerLink: '/ng-for'
                },
                {
                    title: '*ngSwitch',
                    routerLink: '/ng-switch'
                },
                {
                    title: 'FormControl',
                    routerLink: '/form-control'
                },
                {
                    title: 'FormGroup',
                    routerLink: '/form-group'
                },
                {
                    title: 'FormArray',
                    routerLink: '/form-array'
                },
                {
                    title: 'QueryList',
                    routerLink: '/query-list'
                },
            ]
        },
        {
            title: 'SCSS',
            children: []
        },
        {
            title: 'Redux',
            children: [
                {
                    title: 'NGRX',
                    routerLink: '/ngrx'
                },
            ]
        },
        {
            title: 'RXJS-creation',
            children: [
                {
                    title: 'Observable',
                    routerLink: '/observable'
                },
                {
                    title: 'Interval',
                    routerLink: '/interval'
                },
            ]
        },
        {
            title: 'RXJS-combination',
            children: [
                {
                    title: 'combineLatest',
                    routerLink: '/combine-latest'
                },
                {
                    title: 'concat',
                    routerLink: '/concat'
                },
                {
                    title: 'concatAll',
                    routerLink: '/concat-all'
                },
                {
                    title: 'withLatestFrom',
                    routerLink: '/with-latest-from'
                },
            ]
        },
        {
            title: 'RXJS-filtering',
            children: [
                {
                    title: 'take',
                    routerLink: '/take'
                },
            ]
        },
        {
            title: 'Localization',
            children: [
                {
                    title: 'Localization',
                    routerLink: '/translate'
                },
            ]
        },
    ];
}
