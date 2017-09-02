//Angular Dependencies
import {NgModule} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {BrowserModule} from '@angular/platform-browser';

//UI Router Dependencies
import {UIRouterModule} from '@uirouter/angular';
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';

//Custom Module Dependencies
import {BooksModule} from './book/books.module';


export function ContactService($injector) {
    return $injector.get('ContactService');
}

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        UpgradeModule,
        BooksModule,
        UIRouterModule,
        UIRouterUpgradeModule
    ],
    providers: [
        {provide: 'ContactService', deps: ['$injector'], useFactory: ContactService},
    ]
})


export class AppModule {
    ngDoBootstrap() {
    }
}
