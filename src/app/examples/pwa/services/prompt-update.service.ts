import { Injectable } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";

@Injectable()
export class PromptUpdateService {

    constructor(private updates: SwUpdate) {
    }

    public update(): void {
        this.updates.available.subscribe(event => {
            if (prompt('Do you want to download newer version?')) {
                this.updates.activateUpdate().then(() => document.location.reload());
            }
        });
    }
}
