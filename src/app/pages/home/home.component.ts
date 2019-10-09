import { Component, OnInit } from '@angular/core';
import * as productList from './productList.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList:any
  constructor() { }
  ngOnInit() {
    this.productList = productList['default']
    console.log(this.productList, 'productList')
  }
}
