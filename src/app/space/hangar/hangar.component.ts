import {Component, OnInit, ViewChild} from '@angular/core';
import {SpaceShip} from '../space-ship';
import {FighterShip} from '../fighter-ship';
import {BomberShip} from '../bomber-ship';
import {Pilot} from '../pilot';
import {PilotComponent} from '../pilot/pilot.component';
import {PilotRoomComponent} from '../pilot-room/pilot-room.component';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot = null;
  constructor() {}

  @ViewChild(PilotRoomComponent) pliotRoom: PilotRoomComponent;

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip(new Pilot('Imie Nazwisko' , '/assets/adama.png')));
    this.spaceShips.push(new BomberShip());
  }

  leavePilot(spaceShip: SpaceShip) {
    this.pliotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pliotRoom.pilotLeave();
  }
}
