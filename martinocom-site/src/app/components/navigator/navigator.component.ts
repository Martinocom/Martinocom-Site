import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
