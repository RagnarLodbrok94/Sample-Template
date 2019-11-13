import { Component, OnInit } from '@angular/core'; 

@Component({
	selector: 'app-warning',
	template: '<h1 class="warning">{{title}}</h1>',
	styles: ['.warning { display: inline-block; padding: 30px; border-radius: 20px; color: #fff; background: #F00; }']
})

export class WarningComponent implements OnInit {
	title= 'This is Warning component!';

	constructor() { }

  ngOnInit() {
  	
  }
}