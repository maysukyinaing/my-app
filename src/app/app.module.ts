import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyGreetingComponent } from './my-greeting/my-greeting.component';
import { MyChildComponent } from './my-child/my-child.component';
import { MyGrandChildComponent } from './my-child/my-grand-child/my-grand-child.component';
import { MyGreatGrandChildComponent } from './my-child/my-grand-child/my-great-grand-child/my-great-grand-child.component';


@NgModule({
  declarations: [
    AppComponent,
    MyGreetingComponent,
    MyChildComponent,
    MyGrandChildComponent,
    MyGreatGrandChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
