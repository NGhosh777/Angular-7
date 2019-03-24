import { Component, OnInit} from '@angular/core';
import { hoteldeatils } from '../hoteldetail.model';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit {

  hotels : hoteldeatils[];
  constructor(private hotelservice: HotelService) { }

  ngOnInit() {
    this.hotels = this.hotelservice.getHotels();
  }

}
