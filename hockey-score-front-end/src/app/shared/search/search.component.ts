import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public likeChars: string;

  @Output() public onSearch = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    this.likeChars = '';
  }
  tryToFind(likeChars: string) {
    console.log(likeChars);
    this.onSearch.emit(likeChars);
  }
}
