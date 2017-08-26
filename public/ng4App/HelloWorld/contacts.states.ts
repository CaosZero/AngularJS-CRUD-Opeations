import {Ng2StateDeclaration} from "@uirouter/angular";

import {HelloWorld} from "./hello.world.component";


export const HelloWorldState: Ng2StateDeclaration = {
    name: "HelloWorld",
    url: "/hello",
    component: HelloWorld
};

