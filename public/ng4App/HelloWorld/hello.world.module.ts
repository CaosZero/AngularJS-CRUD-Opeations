import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UIRouterModule} from "@uirouter/angular";

import {HelloWorldState} from "./contacts.states";
import {HelloWorld} from "./hello.world.component";


export let HELLO_WOLRD_STATES = [HelloWorldState];

@NgModule({
    imports: [
        CommonModule,
        UIRouterModule.forChild({states: HELLO_WOLRD_STATES})
    ],
    declarations: [HelloWorld],
})
class HelloWorldModule {
}

export {HelloWorldModule};