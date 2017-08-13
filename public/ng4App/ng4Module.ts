import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {NgModule} from '@angular/core';


@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    providers: []
})


export class AppModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['myApp'], {strictDi: true});
    }
}
