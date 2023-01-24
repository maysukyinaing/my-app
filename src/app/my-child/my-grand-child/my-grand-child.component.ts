import { Component } from '@angular/core';

@Component({
  selector: 'app-my-grand-child',
  templateUrl: './my-grand-child.component.html',
  styleUrls: ['./my-grand-child.component.css']
})
export class MyGrandChildComponent {
  greetFromGrandChild:string = 'Hello From Grand Child';
}
