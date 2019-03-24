import { Component, OnInit } from '@angular/core';
import { hoteldeatils } from '../hoteldetail.model';
import { HotelService } from '../hotel.service';
import {  Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotel: hoteldeatils;
  id: number;

  constructor(private hotelservice: HotelService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.hotel = this.hotelservice.getHotel(this.id);
      }
    )
  }

}
