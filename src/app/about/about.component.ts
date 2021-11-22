import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public users = [
    {
      name: 'John Doe',
      age: 32,
      group: "DSI33",
      email: 'john.doe.gmail.com',
      phone: '+33 6 12 34 56 78',
      activeStyle: {
        color: 'red',
        fontWeight: 'bold'
      }
    },
    {
      name: 'Jane Doe',
      age: 29,
      group: "DSI32",
      email: 'jane.doe.gmail.com',
      phone: '+33 6 43 34 78 90',
      activeStyle : {
        color: 'blue',
        fontStyle: 'italic'
      }
    },
  ];

  public choice: string = "SEM3";


  public today = new Date();

  public showButton = true;

  constructor() { }

  ngOnInit(): void {
  }

  private color: any;
  public switchStyle() {
    this.color = this.users[0].activeStyle.color;
    this.users[0].activeStyle.color = this.users[1].activeStyle.color;
    this.users[1].activeStyle.color = this.color;
  }

}
