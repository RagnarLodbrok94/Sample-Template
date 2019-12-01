import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Input title';
  counter: number = 10;
  switch: boolean = true;
  show: boolean;
  interval;

  start() {
    this.show = false;
    this.switch = true;
    this.interval = setInterval(() => {
      this.counter --;
      console.log( this.counter );
  
      if( this.counter === 0 ) {
        clearInterval( this.interval );
        this.switch = !this.switch;
        this.counter = 10;
      }
    }, 1000);
  }

  pause() {
    clearInterval( this.interval );
  }

  assignment( value ) {
    this.show = value;
  }

  constructor() {
    
  }

  ngOnInit() {
    
  }
}
