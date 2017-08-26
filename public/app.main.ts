import './app.contacts';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UpgradeModule} from '@angular/upgrade/static';
import { UIRouter, UrlService } from '@uirouter/core';
import {Injector} from '@angular/core';
import {AppModule} from './ng4App/ng4Module';


platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const injector: Injector = platformRef.injector;
    const upgrade = injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['myApp'], {strictDi: true})
    const url: UrlService = injector.get(UIRouter).urlService;

    url.listen();
    url.sync();
})