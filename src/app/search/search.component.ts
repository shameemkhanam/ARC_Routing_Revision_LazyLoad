import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  color = '';
  size = 'M';
  priceTo = 0;
  priceFrom = 0;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.color = params['color'];
      this.size = params['size'];
      this.priceTo = params['priceTo'];
      this.priceFrom = params['priceFrom'];
      
    });
  }
}
