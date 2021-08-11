import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop horizontal sorting
 */

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

timePeriods = [
    'Operaciones',
    'Adaptacion',
    'Sistemizacion',
    'Expertos',
    'Implementacion'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

  /*
  slider
  */
 showFiller = false;

  	
  constructor() {

   }

  ngOnInit(): void {


  }

}
