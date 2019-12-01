import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() switch: boolean;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  handleClick() {
    if( this.switch === false ) {
      this.onClick.emit( true );
    }
  }

  constructor() { }
}
