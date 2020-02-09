import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public likeChars: string;

  constructor() { }

  ngOnInit() {
    this.likeChars = '';
  }
  tryToFind(likeChars: string) {
    console.log(likeChars);
  }
}
