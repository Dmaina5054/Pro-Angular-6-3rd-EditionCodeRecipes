import { Component } from '@angular/core';
import { Model } from './model'

@Component({
  selector: 'todo-app', //specify css select that matches the htmp element where
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  model = new Model();  //property model

  //define method here
  getName(){
    return this.model.user;
  }

  //method will add html elements to the dom for each
  //object in the array of to do utems
  getTodoItems() {

    return  this.model.items;
  }

  //this method will filter out done items

}
