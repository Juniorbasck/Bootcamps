import { Component, 
  OnInit, 
  DoCheck,
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
 OnInit,
 DoCheck,
 AfterContentChecked, 
 AfterContentInit, 
 AfterViewChecked, 
 AfterViewInit  {

  quantidade:number = 0;

  constructor() { }
  
  Adicionar(){
    this.quantidade += 1; 
  }

  Decrementar(){
    this.quantidade -= 1;
  }

  ngAfterViewInit(): void {
    console.log("ngAftterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentInit(): void {  
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterCotenntChecked")
  }

  ngDoCheck(): void {
    console.log("ngDocheck")
  }

  ngOnInit(): void {
    console.log("ngOnit ")
  }

}
