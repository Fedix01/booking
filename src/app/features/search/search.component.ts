import { CartService } from './../../core/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hotel, Room } from './model/hotel.model';
import { faTrain, faBeer, faCar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})


export class SearchComponent {
text = 'Rome';
hotels: Hotel[] = [];
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
