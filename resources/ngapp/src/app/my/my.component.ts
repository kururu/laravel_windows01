import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  message:string;
  input:FormControl;


  constructor() { }


  ngOnInit() {
    this.message = 'please input your name:';
    this.input = new FormControl('noname');
  }


  doAction() {
    this.message = 'Hello, ' + this.input.value + '!!';
  }

}
