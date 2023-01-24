import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-greeting',
  templateUrl: './my-greeting.component.html',
  styleUrls: ['./my-greeting.component.css']
})
export class MyGreetingComponent implements OnInit{

  name:string = 'Hello, How are you doing?'

  constructor() {
  }

  ngOnInit(): void {
  }

}
