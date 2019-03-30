import { Component, OnInit, Input } from '@angular/core';
import { RestaurantInterface } from './restaurant.interface';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {
  @Input() resItem: RestaurantInterface; 
  constructor() { }

  ngOnInit() {
  }

}
