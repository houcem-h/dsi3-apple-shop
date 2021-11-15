import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public user1 = {
    name: 'John Doe',
    age: 32,
    group: "DSI33",
    email: 'john.doe.gmail.com',
    phone: '+33 6 12 34 56 78',
    activeStyle: {
      color: 'red',
      fontWeight: 'bold'
    }
  };
  public user2 = {
    name: 'Jane Doe',
    age: 29,
    group: "DSI32",
    email: 'jane.doe.gmail.com',
    phone: '+33 6 43 34 78 90',
    activeStyle : {
      color: 'blue',
      fontStyle: 'italic'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  public switchStyle() {
    const color = this.user1.activeStyle.color;
    this.user1.activeStyle.color = this.user2.activeStyle.color;
    this.user2.activeStyle.color = color;
    alert('Style changed');
  }

}
