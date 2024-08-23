import { Hotel, Room } from "./hotel.model";

export class CartItem {
    hotel:Hotel | undefined;
    room:Room | undefined;
    creationDate:number = 0;
}