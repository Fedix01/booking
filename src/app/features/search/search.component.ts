import { CartService } from './../../core/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hotel, Room } from './model/hotel.model';
import { faTrain, faBeer, faCar} from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})


export class SearchComponent implements OnInit {
apiUrl = environment.API_URL;
text = 'Rome';
hotels$ = new Observable<Hotel[]>();
active: Hotel | undefined;

email:string = '';
msg:string = '';

stars:number = 0;

totalStars() {
  if (this.active?.stars === 1) {
    return `
   <div>
   ★☆☆☆☆
   </div>`
  } else if(this.active?.stars === 2) {
    return`
    <div>
    ★★☆☆☆
    </div>`
  }
  else if(this.active?.stars === 3) {
    return`
    <div>
    ★★★☆☆
    </div>`
  }
  else if(this.active?.stars === 4) {
    return`
    <div>
    ★★★★☆
    </div>`
  }
  else if(this.active?.stars === 5) {
    return`
    <div>
    ★★★★★
    </div>`
  } else {
    return
  }
}

constructor(private http: HttpClient,
  private cart: CartService
) {
  this.searchHotels(this.text);
}

ngOnInit(): void {
  this.hotels$ = this.searchHotels(this.text)
}
searchHotels(text: string):Observable<Hotel[]> {
  this.text = text;
  return this.http.get<Hotel[]>(`${this.apiUrl}/hotels?q=${text}`);
}

setActive(hotel:Hotel) {
  this.active = hotel;
}

sendEmail({email, msg}: {email: string, msg: string}) {
  window.alert(`sent:
  ${email}
  ${msg}
  ${this.active!.email}
  `)
}

addToCart(room:Room, active:any) {
  this.cart.addToCart(active, room)
}
}
