import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchData = new EventEmitter();

  searchInput = new FormControl();
  constructor() { }

  ngOnInit() {
  }

  searchText(data: string): void {
    this.searchData.emit(data);
  }
}
