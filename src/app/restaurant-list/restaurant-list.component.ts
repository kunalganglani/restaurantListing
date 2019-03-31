import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { RestaurantInterface } from "../restaurant-card/restaurant.interface";

@Component({
  selector: "app-restaurant-list",
  templateUrl: "./restaurant-list.component.html",
  styleUrls: ["./restaurant-list.component.scss"]
})
export class RestaurantListComponent implements OnInit {
  @Input() listRestaurantArray: RestaurantInterface[];
  pastSearchHistory: String[] = ["Pizza", "Dosa", "Chole"];
  sortOrder: number = -1;
  deliverySortOrder: number = -1;
  searchOnVisibility: boolean;
  searchTextArray: String[] = ["south", "dosa"];
  constructor() {}
  @ViewChild('restaurantList') restaurantList: ElementRef;
  @ViewChild('pastSearches') pastSearches: ElementRef;
  @ViewChild('searchInputTag') searchInputTag: ElementRef;
  
  
  ngOnInit() {}

  updateSearch(event) {
    const searchText = event.target.innerText;
    this.searchInputTag.nativeElement.value = searchText;
    this.triggerSearch(searchText);
  }

  sortByRating()  {
    this.listRestaurantArray = this.listRestaurantArray.sort((a,b) => {
      return this.sortOrder*(a.rating - b.rating);
    });
    this.sortOrder *= -1;
  }

  sortByDeliveryTime() {
    this.listRestaurantArray = this.listRestaurantArray.sort((a,b) => {
      return this.deliverySortOrder*(a.delivery_time - b.delivery_time);
    });
    this.deliverySortOrder *= -1;
  }

  togglePastSearch(visibility: Boolean) {
    const pastSearchBlock = this.pastSearches.nativeElement;
    if(visibility) {
      pastSearchBlock.style.display = 'block';
    } else {
      pastSearchBlock.style.display = 'none';
    }
  }

  updateSearchHistory(searchString) {
    if(searchString!== '' && !this.pastSearchHistory.includes(searchString)) {
      this.pastSearchHistory.pop();
      this.pastSearchHistory.unshift(searchString);  
    }
  }
  triggerSearch(searchString: string) {
    this.updateSearchHistory(searchString);
    this.togglePastSearch(false);
    if(searchString === '') {
      this.searchOnVisibility = false;
    } else {
      this.searchTextArray = searchString.split(' ');
      this.searchOnVisibility = true;
    }
    
    const filter = searchString.toUpperCase();
    const list = this.restaurantList.nativeElement;
    const restaurantBoxes = list.children;
    for (let i = 0; i < restaurantBoxes.length; i++) {
      const restaurantBoxText = list.children[i].innerText; // searches both: title and last message
      if (restaurantBoxText.toUpperCase().indexOf(filter) > -1) {
        restaurantBoxes[i].style.display = '';
      } else {
        restaurantBoxes[i].style.display = 'none';
      }
    }


  }
}
