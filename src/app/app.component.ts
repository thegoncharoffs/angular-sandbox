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
            title: 'RXJS',
            children: [
                {
                    title: 'Observable',
                    routerLink: '/observable'
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
