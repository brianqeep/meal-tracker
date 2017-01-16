import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <h1>Track your meal</h1>
  <div>
    <input type="text" ><input>
  </div>
  `
})

export class AppComponent {
  meal: meal;
constructor (){
 this.meal = {
   mealName = "";
 }
  }
}
interface meal{

}
