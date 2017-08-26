import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';
import {HelloWorldModule} from './HelloWorld/hello.world.module';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        UpgradeModule,
        HelloWorldModule,
        UIRouterModule,
        UIRouterUpgradeModule,

    ],
    providers: []
})


export class AppModule {
    ngDoBootstrap() {}
}
