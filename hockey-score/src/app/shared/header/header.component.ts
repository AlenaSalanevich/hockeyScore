import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter: number = 0;
  constructor() { }

  ngOnInit() {
  }

  /**
   * handleClick
   * 
   */
  handleClick() {
    console.log('clicked!');
    this.counter++;
  }
}
