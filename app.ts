/// <reference path="./_references.d.ts" />
import {bootstrap, Component, View, For, If, Switch, SwitchWhen, SwitchDefault} from 'angular2/angular2';
import {Greeter} from "./greeter";

@View({
  templateUrl: 'app.html',
  directives: [
     For, If
  ]
})
@Component({
  selector: 'tower-app',
  injectables: [Greeter]
})
export class App {
   constructor(private greeter: Greeter) {
      console.log("running");
   }

   public inputName: string = "";
   public greeting: string = "";

   public greet() {
      console.log('name is ' + this.inputName);
      this.greeting = this.greeter.greet(this.inputName);
   }
   
   public handleChangeName(seat, event) {
      this.inputName = event.target.value;
   }

}

export function main() {
   // You can use the light dom of the <hello-app> tag as temporary content (for
   // example 'Loading...') before the application is ready.
   console.log('bootstrapping')
   bootstrap(App);
}
