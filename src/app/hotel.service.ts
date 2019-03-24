import { Injectable } from '@angular/core';
import { hoteldeatils } from './hoteldetail.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private hotels: hoteldeatils[] = [
    new hoteldeatils('Hotel-Taj-1','50000','Mumbai','9.5/10'),
    new hoteldeatils('Hotel-Taj-2','50000','Mumbai','9.5/10'),
    new hoteldeatils('Hotel-Taj-3','50000','Mumbai','9.5/10'),
    new hoteldeatils('Hotel-Taj-4','50000','Mumbai','9.5/10'),
    new hoteldeatils('Hotel-Taj-5','50000','Mumbai','9.5/10'),
    new hoteldeatils('Hotel-Taj-6','50000','Mumbai','9.5/10'),

  ]
  constructor() { }

  getHotels(){
    return this.hotels.slice();
  }

  getHotel(index: number){
    return this.hotels[index];

  }
}
