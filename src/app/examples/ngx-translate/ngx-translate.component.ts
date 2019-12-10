import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-ngx-translate',
    templateUrl: './ngx-translate.component.html',
    styleUrls: ['./ngx-translate.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTranslateComponent implements OnInit {

    constructor(public translate: TranslateService) {
        // Add list of languages
        translate.addLangs(['en', 'fr']);
        // This language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // Reads browser language
        const browserLang = translate.getBrowserLang();
        // If not found available language => use english
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

    public ngOnInit(): void {
        // How to set language
        this.translate.use('fr');

        // To get slice of translation
        console.log(this.translate.instant('home.title'));
    }

}
