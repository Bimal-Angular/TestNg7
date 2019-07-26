import {Component} from '@angular/core'

@Component({
    selector:'ionicWithExistingAngular',
    template:`
    I have documented my approach here: https://stack247.wordpress.com/2019/03/11/integrate-ionic-in-existing-angular-project/
    <br/>
    This applies to Angular 7.Ionic 5.
    Essentially, these are the steps:
    <br/>
    The step includes creating a new project using Ionic CLI, I'm going to refer it as Ionic project while my original Angular project as, well, Angular project.
    <br/>
    In your Angular project, update all npm packages, to the latest major if you can. This is to avoid version conflict with Ionic project's npm packages.
    <br/>
    Start a new Ionic blank project. - <code>ionic start project-name blank</code><br/>
    Update all npm packages in the newly created Ionic project.<br/>
    Copy ionic.config.json from Ionic project to Angular project.<br/>
    Copy angular.json from Ionic project to Angular project.<br/>
    If you have specifically changed anything in your angular.json, make that necessary changes in the Angular project after the copy.<br/>
    Ionic uses SCSS for style sheet by default, so if you are not using SCSS, make sure to copy settings under projects/app/architect/**/options/styles from Angular project's angular.json prior to copy.<br/>
    Copy package.json from Ionic project to Angular project.<br/>
    If you have specifically changed anything in your package.json (npm scripts, etc), make that necessary changes in the Angular project after the copy.<br/>
    Combine the npm packages from both projects setting under dependencies and devDependencies.<br/>
    Combine .gitignore files from both projects, if you are using Git source control.<br/>
    In Angular project, delete package-lock.json file and node_modules folder. These should be located in root of the project.<br/>
    In Angular project, run npm install command.<br/>
    <code>npm install</code><br/>
    Test and make sure everything runs.<br/>
    // Test run with Ionic<br/>
    <code>ionic serve</code><br/>
    // Test run with Angular<br/>
    <code>ng serve --open</code><br/>
    If you want to prepare your project for Cordova, runs the following command. Note that environment setup is required. Please refer to reference section for more details.<br/>
    // For Android<br/>
    <code>ionic cordova prepare android</code><br/>
    // For iOS<br/>
    <code>//ionic cordova prepare ios</code><br/>
    `,
styles:[]
})
export class IonicWithExistingAngular
{

}