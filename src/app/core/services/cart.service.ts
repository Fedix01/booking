import { Injectable } from "@angular/core";
import { CartItem } from "../../features/search/model/cart-item";
import { Hotel, Room } from "../../features/search/model/hotel.model";

@Injectable({
    providedIn:'root'
})
export class CartService {
    items: CartItem[] = [];

    addToCart(hotel:Hotel, room:Room) {
// this.items.push({
//     hotel:hotel,
//     room:room,
//     creationDate: Date.now()
// })
this.items = [...this.items, 
    {
        hotel:hotel,
         room:room,
     creationDate: Date.now()
    }];

    }

    removefromCart(cartItem:CartItem) {
this.items = this.items.filter(item => item.creationDate !== cartItem.creationDate)
    }

    proceed() {
    window.alert(this.items.length)
    }
}