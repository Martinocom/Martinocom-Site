import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() size: number;

  constructor() { }

  ngOnInit() {
  }

}
