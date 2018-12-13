import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  url = "https://cdn2.thecatapi.com/images/" + Math.floor((Math.random() * 3) + 1) + ".jpg";

  constructor() { }

  ngOnInit() {
  }

}
