import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-counter',
  templateUrl: './game-counter.component.html',
  styleUrls: ['./game-counter.component.css']
})
export class GameCounterComponent implements OnInit {
  @Input() numbers: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
