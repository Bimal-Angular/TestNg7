import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stateManagement',
  template:`
  <div style="background-color:lightgrey">
  <h1>State Management</h1>
  <h3>Types of States</h3>
  <p>Server State</p><br/>
  <p>Persistent State</p><br/>
  <p>Url and route State</p><br/>
  <p>Client State</p><br/>
  <p>Transienet client State</p><br/>
  <p>Local Ui State</p><br/>

  </div>
  `,
  styleUrls: []
})
export class StateManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
