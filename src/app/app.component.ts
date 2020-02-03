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
                    title: 'Parent & Children',
                    routerLink: '/parent'
                },
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
                {
                    title: 'BrowserValidator',
                    routerLink: '/browser-validator'
                },
                {
                    title: 'Guards',
                    routerLink: '/admin'
                },
            ]
        },
        {
            title: 'SCSS',
            children: []
        },
        {
            title: 'Plain JS',
            children: [
                {
                    title: 'Promise',
                    routerLink: '/promise'
                },
            ]
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
                    title: 'Subject',
                    routerLink: '/subject'
                },
                {
                    title: 'Multicast Observable',
                    routerLink: '/multicast-observable'
                },
                {
                    title: 'Behavior Subject',
                    routerLink: '/behavior-subject'
                },
                {
                    title: 'Replay Subject',
                    routerLink: '/replay-subject'
                },
                {
                    title: 'Async Subject',
                    routerLink: '/async-subject'
                },
                {
                    title: 'Interval',
                    routerLink: '/interval'
                },
                {
                    title: 'Observable (hot with share)',
                    routerLink: '/share'
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
                {
                    title: 'switchMap',
                    routerLink: '/switch-map'
                },
                {
                    title: 'mergeMap',
                    routerLink: '/merge-map'
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
        {
            title: 'Express JS',
            children: [
                {
                    title: 'Mocks',
                    routerLink: '/mocks'
                },
            ]
        },
    ];
}
