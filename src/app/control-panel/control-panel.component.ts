import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Output("numbers") numbersArr = new EventEmitter<any>()
  number = 1;
  numbers: number[] = [1];
  intervalId = 0
  isIntervalInProgress = false;
  //functions
  intervalHandler() {
    this.number++;
    this.numbers.push(this.number);
    this.numbersArr.emit(this.numbers)
  }
  onStart() {
    //only one interval at the same time
    if (!this.isIntervalInProgress) {
      let intervalId = setInterval(() => { this.intervalHandler() }, 1000)
      this.intervalId = Number(intervalId)
      this.isIntervalInProgress = !this.isIntervalInProgress
    }
  }
  onEnd() {
    //only one interval at the same time
    if (this.isIntervalInProgress) {
      clearInterval(this.intervalId)
      this.isIntervalInProgress = !this.isIntervalInProgress
    }
  }

}
