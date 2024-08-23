import { Component } from '@angular/core';
import { CartService } from './core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booking';

  constructor(public cart:CartService) {}
}
