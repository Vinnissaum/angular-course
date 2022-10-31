import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://loaine.training';
  urlImage: string = 'https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_960_720.jpg'

  constructor() { }

  getFifty(): number {
    return 50;
  }

  ngOnInit(): void {
  }

}
