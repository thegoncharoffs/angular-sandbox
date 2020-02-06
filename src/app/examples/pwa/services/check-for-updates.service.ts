import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class CheckForUpdateService {

    // Checks for updates every 6 hours
    constructor(appRef: ApplicationRef, updates: SwUpdate) {
        // Allow the app to stabilize first, before starting polling for updates with `interval()`.
        const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
        // Check every 6 hours
        const everySixHours$ = interval(6 * 60 * 60 * 1000);
        const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

        // After checkForUpdate() resolved SW will automatically load new files and after emit event `available`
        everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
    }
}
