import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { EvenComponent } from './game-counter/even/even.component';
import { GameCounterComponent } from './game-counter/game-counter.component';
import { OddComponent } from './game-counter/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    OddComponent,
    EvenComponent,
    GameCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
