import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, of, Subscription} from 'rxjs';
import {delay, mergeMap} from 'rxjs/operators';

@Component({
	selector: 'app-merge-map',
	templateUrl: './merge-map.component.html',
	styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit, OnDestroy {
	private subscription: Subscription;

	private saveLocation$ = location => {
		return of(location).pipe(delay(500));
	};

	private observable$ = fromEvent(document, 'click').pipe(
		mergeMap((e: MouseEvent) => {
			return this.saveLocation$({
				x: e.clientX,
				y: e.clientY,
				timestamp: Date.now()
			});
		})
	);

	public ngOnInit(): void {
		this.subscription = this.observable$.subscribe((value) => {
			console.log('Saved!', value);
		});
	}

	public ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

}
