import { Component, OnInit } from "@angular/core";
import { RestaurantInterface } from "../restaurant-card/restaurant.interface";

@Component({
  selector: "app-restaurant-list",
  templateUrl: "./restaurant-list.component.html",
  styleUrls: ["./restaurant-list.component.scss"]
})
export class RestaurantListComponent implements OnInit {
  listRestaurantArray: RestaurantInterface[] = [
    {
      id: 1,
      restaurant_name: "Sigmoid Threadplant",
      rating: 3,
      delivery_time: 15,
      cuisines: ["Lettuce - Treviso"],
      preview_image: "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
      id: 2,
      restaurant_name: "Steen Mountain Thistle",
      rating: 3,
      delivery_time: 65,
      cuisines: ["Bread Foccacia Whole"],
      preview_image: "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
      id: 3,
      restaurant_name: "Ajo Rockdaisy",
      rating: 3,
      delivery_time: 17,
      cuisines: ["Cups 10oz Trans"],
      preview_image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    }
  ];
  constructor() {}
  ngOnInit() {}
}
