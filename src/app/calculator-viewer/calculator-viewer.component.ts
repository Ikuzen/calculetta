import { Component, OnInit } from '@angular/core';
import { Buttons } from './../buttons'
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface Operation {
  isOperating: boolean;
  savedTotal: number,
  operationType: string;
}


@Component({
  selector: 'app-calculator-viewer',
  templateUrl: './calculator-viewer.component.html',
  styleUrls: ['./calculator-viewer.component.scss']
})
export class CalculatorViewerComponent implements OnInit {
  buttons: Buttons = new Buttons;
  currentInput: string = "";
  inputElement: HTMLCollection = document.getElementsByTagName("input");
  Operation: Operation = {
    isOperating: false,
    savedTotal: 0,
    operationType: "none"
  }
  calculs = {
    "add":"+",
  }

  constructor() {
  }

  ngOnInit() {

  }
  equal() {
    console.log(this.currentInput)
    console.log(this.Operation)
    if(this.Operation.isOperating === true && this.currentInput){
      console.log("ready to calculate")
      switch (this.Operation.operationType){
        case "add":
           this.currentInput = this.Operation.savedTotal + parseFloat(this.currentInput)
           break
        case "sub": 
          this.currentInput = this.Operation.savedTotal - parseFloat(this.currentInput)
          break
        case "multiply":
           this.currentInput = this.Operation.savedTotal * parseFloat(this.currentInput)
           break
        case "divide":
           this.currentInput = this.Operation.savedTotal / parseFloat(this.currentInput)
           break
        default:

      }
      console.log(this.currentInput)
      this.Operation.isOperating= false


    }


  }
  buttonType(char: String) {
    this.currentInput += char;
  }
  delete() {
    this.currentInput = this.currentInput.substr(0, this.currentInput.length - 1)
  }
  reset() {
    this.currentInput = "";
    this.Operation.operationType = "none";
    this.Operation.savedTotal = 0;
    this.Operation.isOperating = false;
  }
  multiply() {
    this.Operation.operationType = "multiply";
    this.Operation.savedTotal = parseFloat(this.currentInput);
    this.Operation.isOperating = true;
    this.currentInput = "";

  }
  divide() {
    this.Operation.operationType = "divide";
    this.Operation.savedTotal = parseFloat(this.currentInput);
    this.Operation.isOperating = true;
    this.currentInput = "";

  }

  add() {
    this.Operation.operationType = "add";
    this.Operation.savedTotal = parseFloat(this.currentInput);
    this.Operation.isOperating = true;
    this.currentInput = "";

  }
  sub() {
    this.Operation.operationType = "sub";
    this.Operation.savedTotal = parseFloat(this.currentInput);
    this.Operation.isOperating = true;
    this.currentInput = "";

  }


  isEditable() {
    // if(this.currentInput.test()){

    // }
  }

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  is_valid(calcul){
    try{
        eval(calcul);
        return true;
    }
    catch(e){
        return false;
    }
  }
}