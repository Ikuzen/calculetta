import { Component, OnInit } from '@angular/core';
import {Buttons} from './../buttons'

@Component({
  selector: 'app-calculator-viewer',
  templateUrl: './calculator-viewer.component.html',
  styleUrls: ['./calculator-viewer.component.scss']
})
export class CalculatorViewerComponent implements OnInit {
  buttons:Buttons = new Buttons;
  currentInput:string = "";
  constructor() {
  }

  ngOnInit() {
  }
  displayInput(){
    console.log(this.currentInput)
  }
}
