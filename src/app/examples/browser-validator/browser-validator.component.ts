import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {fromEvent, Subscription} from 'rxjs';

@Component({
    selector: 'app-browser-validator',
    templateUrl: './browser-validator.component.html',
    styleUrls: ['./browser-validator.component.scss']
})
export class BrowserValidatorComponent implements OnInit, OnDestroy {

    // Launch me with command: npm run build:ssr && npm run serve:ssr

    /** @internal */
    public _isBrowser: boolean;

    private onScrollSubscription: Subscription;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this._isBrowser = isPlatformBrowser(this.platformId);
    }

    public ngOnInit(): void {
        if (this._isBrowser) {
            console.log(document.querySelector('body'));

            this.onScrollSubscription = window && fromEvent(window, 'scroll').subscribe(() => {
                console.log('Scroll');
                // Some logic
            });
            // Some logic
        }
    }

    public ngOnDestroy(): void {
        this.onScrollSubscription && this.onScrollSubscription.unsubscribe();
    }

}
