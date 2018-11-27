import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universita',
  templateUrl: './universita.component.html',
  styleUrls: ['./universita.component.scss']
})
export class UniversitaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  openLink(url: string) {
    window.open(url, "_blank");
  }
}
