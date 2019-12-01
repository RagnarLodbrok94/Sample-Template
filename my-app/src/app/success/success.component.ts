import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})

export class SuccessComponent implements OnInit {
	title: string;
	switch: boolean;
	text: string;

	ngOnInit() {
		this.title = 'This  is Success component!';
		this.switch = true;
		this.text = "Hide";
	}

	handleClick() {
		this.switch = !this.switch;
		this.text = this.switch ? "Hide" : "Show";
	}
}
