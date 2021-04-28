import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SpaceModule} from '../space/space.module';
import { HangarComponent } from './space/hangar/hangar.component';
import { SpaceShipComponent } from './space/space-ship/space-ship.component';
import { A2sCommModule } from 'a2s-comm';
import { PilotComponent } from './space/pilot/pilot.component';
import { PilotRoomComponent } from './space/pilot-room/pilot-room.component';
@NgModule({
  declarations: [
    AppComponent,
    HangarComponent,
    SpaceShipComponent,
    PilotComponent,
    PilotRoomComponent,
  ],
  imports: [
    BrowserModule,
    SpaceModule,
    A2sCommModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
