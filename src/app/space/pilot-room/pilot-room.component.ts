import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pilot} from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {


  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;
  @Output() selected = new EventEmitter<Pilot>();

  constructor() { }

  ngOnInit(): void {
    this.pilots.push(new Pilot('Rafał Wielki'));
    this.pilots.push(new Pilot('Marek Słaby'));
    this.pilots.push(new Pilot('Oliwia Ziemniak'));
  }


   select(pilot: Pilot) {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }
  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }
  pilotLeave() {
   const index = this.pilots.indexOf(this.selectedPilot);
   this.pilots.splice(index , 1);
   this.select(null);
  }

}
