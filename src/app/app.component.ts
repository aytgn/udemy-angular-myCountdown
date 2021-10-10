import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //DECLERATIONS
  numbers: number[] = []
  //Objects

  showNumbers(numbers: number[]) {
    this.numbers = [...numbers]
    console.log(this.numbers)
  }

}



