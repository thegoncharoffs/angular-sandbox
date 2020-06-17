import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AdminComponent } from '../admin.component';

@Injectable({
    providedIn: 'root'
})
export class DiscardGuard implements CanDeactivate<AdminComponent> {
    canDeactivate(
        component: AdminComponent,
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        alert('DiscardGuard worked and this route is gonna be changed in 5 sec');
        return of(true).pipe(delay(5000));
    }
}
