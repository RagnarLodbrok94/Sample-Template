import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {
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

}
