import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn Amazing Angualar with pyae pyae. ';

  imageUrl:string = 'https://images.unsplash.com/photo-1550611343-63ba251eaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=200'

  inputText = 'Enter Name';

  fruits:string[] = [];

  onClick(name:string) {
    this.fruits.push(name)
  }

  get showInfo():string {
      return this.title
  }
  person = {
    "name":"John Doe",
    "age": 23
  }





}
