import { Component, OnInit } from '@angular/core';
import { RestaurantListService } from './services/restaurant-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  restaurants;
  ngOnInit(): void {
    this.setDataSource();
  }
  constructor(private _restaurantListService: RestaurantListService) {  
  }

  setDataSource(): any {
    if (!localStorage.getItem('restaurantListData')) {
      this._restaurantListService.getAllRestaurantListData()
        .subscribe(
          res => {
            this.restaurants = res;
            // this.windowHeaderData = res[0];
            localStorage.setItem('restaurantListData', JSON.stringify(res));
          },
          err => {
            console.log('service failed');
            // this.openSnackBar(`Error: ${err.error.text}`, 'Register a few users');
          }
        );
    } else {
      this.restaurants = JSON.parse(localStorage.getItem('restaurantListData'));
    }
  }
}
