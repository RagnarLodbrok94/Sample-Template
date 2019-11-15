import { Component } from '@angular/core'; 

@Component({
	selector: 'app-warning',
	template: '<h1 class="warning">{{title}}<app-badge></app-badge></h1>',
	styles: ['.warning { display: inline-block; padding: 30px; border-radius: 20px; color: #fff; background: #F19711; }'] 
})

export class WarningComponent {
	title: string = 'This is Warning component!';
}