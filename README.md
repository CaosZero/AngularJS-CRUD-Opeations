<h1>Angular Hybrid</h1>
Simple UI-Router example using route to both AngularJS components and Angular components.
 <br/>
Consideration about hybid mode: 
<ul>
<li>@angular/upgrade/static, which is what the Angular team actively supports for hybrid mode </li>
<li>@uirouter/angular-hybrid version 3.0.0 because will support only UpgradeModule(More documentation <a href="https://github.com/ui-router/angular-hybrid">here</a>)</li>
</ul>

Framework versions :
<ul>
<li>@angular: 4.0.0</li>
<li>angular: 1.6.5</li>
<li>types/angular: 1.6.31 (Needed for uirouter/angular-hybrid)</li>
<li>typescript: 2.4.2 </li>
<li>webpack: 3.5.5 </li>
</ul>

The hybrid application is bootstrap inside <b>app.main.ts</b> and at bootstrap time the default state will be ContactsList Component, is defined inside <b>app.contacts.ts</b>. 
Structure Files: 

<i>AngularJS Module </i>is declared inside<b>app.contacts.ts</b>. 
Feature is broken by module, trying to follow the Sacrificial Architecture (described <a href="https://medium.com/@TheStrazz86/sacrificial-architecture-in-web-development-3926c0593fc8">here</a>).
So there are module for: 
<ul>
<li>List Contact (Folder listContact, module myApp.listContacts)</li>
<li>Edit Contact (Folder: addContact, module myApp.editContact)</li>
<li>Add Contact (Folder: addContact, module myApp.addContact)</li>
<li>Header (Folder: heder, module myApp.header)</li>
<li>Services (Folder: serviceContacts, module myApp.serviceContacts)</li>
</ul>


<i>Angular Module</i> is declared under ng4App folder in <b>ng4Module.ts</b> file, there some default angular imports and some uirouter dependecies. <br>
<br>
Here are declared three simple components:
<ul>
<li>BookList</li>
<li>BookListItem </li>
<li>BookDetail (where is present a trivial new resolve ui router declaration).  </li></li> 
</ul>
<br>
There is a interesting thing, it possible to inject Angularjs Service inside Angular. Inside providers tag,is injected the ContactService a Angularjs Service. 
The same singleton instance of each service is shared between the frameworks. In Angular these services will always be in the root injector and available to all components.



  
Utils Link 
<li><a href="https://angular.io/guide/upgrade">Upgrading from AngularJS (Official Guide)</a></li>
<li><a href="https://github.com/ui-router/angular-hybrid">UI-Router support Example for Hybrid Angular/AngularJS apps</a></li>