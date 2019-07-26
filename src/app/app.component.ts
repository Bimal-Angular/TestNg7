import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

})
export class AppComponent1 {
  title = 'TestNg7';
  public parentProp = "this is parent data";

  public parentObj = {
    'objId': 1,
    'objName': 'bimal'
  };




  public messageFromChild;
  public dataObjFromChild = {};
}
