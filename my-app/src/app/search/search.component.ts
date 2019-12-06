import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  userName: string = 'toddmotto';
  response: any;

  constructor( private http: HttpClient ) {

  }

  search() {
    this.http.get( 'https://api.github.com/users/' + this.userName )
    .subscribe( ( response ) => {
      this.response = response;
      console.log( this.response );
    } )
  }
}
