import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, interval, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
	selector: 'app-switch-map',
	templateUrl: './switch-map.component.html',
	styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, OnDestroy {

	private subscription: Subscription;

	private observable$ = fromEvent(document, 'click')
		.pipe(
			// restart counter on every click
			switchMap((event) => {
				console.log('Timer restarted: ', event);
				return interval(1000);
			})
		);

	public ngOnInit(): void {
		this.subscription = this.observable$.subscribe((value) => {
			console.log(value);
		});
	}

	public ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

}
