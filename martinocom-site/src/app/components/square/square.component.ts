import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() title: string;
  @Input() background: string;
  @Input() width: number;
  @Input() height: number;
  @Input() margin: number;
  @Input() isRounded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
