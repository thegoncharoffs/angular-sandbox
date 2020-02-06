import { Injectable } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";

@Injectable()
export class LogUpdateService {

    constructor(updates: SwUpdate) {
        updates.available.subscribe(event => {
            // Emits if new version is available
            console.log('current version is', event.current);
            console.log('available version is', event.available);
        });
        updates.activated.subscribe(event => {
            // Emits if new version is installed
            console.log('old version was', event.previous);
            console.log('new version is', event.current);
        });
    }
}
