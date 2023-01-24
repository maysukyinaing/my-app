import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit{
  name:string = 'Hello From My Child'

  constructor() {
  }

  ngOnInit(): void {
  }

}
