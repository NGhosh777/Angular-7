import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  @Input() hoteldetails : {name: string, location: string, rating: string, price: string}
  
  constructor() { }

  ngOnInit() {
  }

}
