import { Component, OnInit } from '@angular/core';
import { SwPush } from "@angular/service-worker";

const VAPID_PUBLIC = "BDJ-yioaMK1jFiGVrWSsB8zAMSFWyTwqs9R3N_acqHVluIw6a6IYjznFCb5nEpANSzXdNvaOvnjXqcc27r3AkKk";

@Component({
    selector: 'app-pwa',
    templateUrl: './pwa.component.html',
    styleUrls: ['./pwa.component.scss']
})
export class PWAComponent implements OnInit {

    constructor(private svPush: SwPush) {
    }

    public ngOnInit(): void {
        this.svPush.messages.subscribe((message) => {

        })
    }

    /** @internal */
    public _enableNotifications() {
        console.log(this.svPush.isEnabled);
        this.svPush.requestSubscription({serverPublicKey: VAPID_PUBLIC}).then(
            (subscription) => console.log('Resolved', subscription),
            () => console.log
        );
        // or
        // let promise = Notification.requestPermission();
        // promise.then(
        //     () => console.log('Resolved'),
        //     () => console.log('Rejected')
        // );
    }

    /** @internal */
    public _createNotification() {
        console.log('Here');
        const notification = new Notification('UX-NG2 Bugs free! Almost...');
        setTimeout(notification.close.bind(notification), 4000);
    }
}
