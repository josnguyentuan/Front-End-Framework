import { MONSTERS } from './../../mock-data/MONSTERS';
import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {
  monsters: Array<Monster>= MONSTERS;

  constructor() { }

  ngOnInit(): void {
  }

}
