import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningComponent } from './warning.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
	declarations: [
		WarningComponent,
		BadgeComponent
	],
	imports: [ 
		CommonModule
	],
	exports: [
		WarningComponent 
	]
})
export class WarningModule { }