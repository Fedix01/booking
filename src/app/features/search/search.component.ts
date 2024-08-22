import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hotel } from './model/hotel.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})


export class SearchComponent {
text = 'Rome';
hotels: Hotel[] = [];
active: Hotel | undefined;

constructor(private http: HttpClient) {
  this.searchHotels(this.text);
}
searchHotels(text: string) {
  this.text = text;
  this.http.get<Hotel[]>('http://localhost:3000/hotels?q=' + text)
    .subscribe(result => {
      this.hotels = result
    });
}

setActive(hotel:Hotel) {
  this.active = hotel;
}
}
