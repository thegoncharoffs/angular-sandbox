import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    HostBinding,
    OnInit,
    QueryList
} from '@angular/core';
import {TabPanelItemComponent} from './item/tab-panel-item.component';

@Component({
    selector: 'app-tab-panel',
    templateUrl: './tab-panel.component.html',
    styleUrls: ['./tab-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabPanelComponent implements OnInit, AfterViewInit {

    @HostBinding('class.tab-panel')
    public hostClass = true;

    @ContentChildren(TabPanelItemComponent)
    /** @internal */
    public tabItems: QueryList<TabPanelItemComponent>;

    /** @internal */
    public _tabs: TabPanelItemComponent[] = [];

    private selectedTab: TabPanelItemComponent;

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.updateTabs();
        this.tabItems.changes.subscribe(this.updateTabs);
    }

    private updateTabs = () => {
        this._tabs = this.tabItems.toArray();
        this._tabs.forEach((tab) => {
            this.selectedTab = undefined;
            if (tab.selected) {
                this.selectedTab = tab;
            }
        });

        if (!this.selectedTab) {
            this.selectedTab = this._tabs[0];
            this.selectedTab.selected = true;
        }
        this.selectedTab.cdr.detectChanges();
        this.cdr.detectChanges();
    };

    private _selectTab(tab: TabPanelItemComponent): void {
        if (tab === this.selectedTab) {
            return;
        }

        this.selectedTab.selected = false;
        this.selectedTab.cdr.markForCheck();

        this.selectedTab = tab;
        this.selectedTab.selected = true;
        this.selectedTab.cdr.markForCheck();
    }
}
