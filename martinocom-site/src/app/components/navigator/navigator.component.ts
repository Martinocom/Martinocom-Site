import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  @Input() title: string;
  @ViewChild('menu') menu: ElementRef;

  isMenuVisible = false;

  constructor() { }

  ngOnInit() {
  }

  onBarsClick() {
    this.isMenuVisible = !this.isMenuVisible;

    $("#menu").toggleClass("closed");
  }

}
