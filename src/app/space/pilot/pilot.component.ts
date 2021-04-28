import {Component, Input, OnInit} from '@angular/core';
import {Pilot} from '../pilot';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  constructor() { }

  @Input() pilot: Pilot;

  ngOnInit(): void {
  }

}
