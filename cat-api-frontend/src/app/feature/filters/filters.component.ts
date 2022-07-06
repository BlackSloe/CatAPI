import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  catCount: number = 10;

  constructor(private _catService: CatService) { }

  ngOnInit(): void {
  }

  search(): void {
    this._catService.getCatImages(this.catCount);
  }
}
