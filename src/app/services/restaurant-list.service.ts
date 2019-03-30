import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantListService {
  url = 'http://localhost:3000';
  getAllRestaurantListData() {
    return this._http.get<any>(this.url + '/restaurantsDataSource');
  }
  getRestaurantById(id) {
    return this._http.get<any>(this.url + '/restaurantsDataSource/' + id);
  }

  constructor(private _http: HttpClient) { }
}

