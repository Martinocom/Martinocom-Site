import { Component, OnInit, OnDestroy, Renderer2, } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banane',
  templateUrl: './banane.component.html',
  styleUrls: ['./banane.component.scss']
})
export class BananeComponent implements OnInit {

  constructor(private renderer: Renderer2, private http: HttpClient) {
    this.renderer.addClass(document.body, 'no-scroll');
  }

  personCount: number = 45;
  counter: number = 0;
  text: string = "";

  ngOnInit() {
    this.renderer.addClass(document.body, 'no-scroll');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  onBananaClick() {
    this.counter+=2;

    $("<div class='chute'><img src='./assets/images/small-banana.gif'/></div>").appendTo('#main');
    $("<div class='chute small'><img src='./assets/images/small-banana.gif'/></div>").appendTo('#main');
    //$('<div/>', { class: 'chute small' }).appendTo('#main');

    var width = $(window).width() - 110;
    var height = $(window).height() - 110;
    var chute = $('.chute');

    chute.each(function foo() {

      //generate random values
      var top = (Math.random() * height) | 0;
      var left = (Math.random() * width) | 0;
      var time = Math.random() * (800 - 400) + 400 | 0;

      //animate
      //we introduce a random value so that they aren't moving together
      //after the animation, we call foo for the current element
      //to animate the current element again
      $(this).animate({
        left: left,
        top: top
      }, time, foo);
    });

    if (this.counter == 1) 
      this.text = this.counter + " banana!";
    else if (this.counter < 20)
      this.text = this.counter + " banane!";
    else if (this.counter < 40)
      this.text = "Ti piacciono fin troppo " + this.counter + " banane... eh?";
    else if (this.counter < 60)
      this.text = "Non hai meglio da fare che guardare " + this.counter + " banane?";
    else if (this.counter < 80)
      this.text = "Ci credi che hai fatto nascere " + this.counter + " banane?";
    else if (this.counter < 120)
      this.text = "Mi arrendo: " + this.counter + " banane sono troppe!";
    else if (this.counter < 140)
      this.text = "HO DETTO MI ARRENDO! (" + this.counter + ")";
    else if (this.counter < 110)
      this.text = "... (" + this.counter + ")";
    else if (this.counter < 150000)
      this.text = "Radioattività della pagina: " + (this.counter / 10).toFixed(1) + " micro-sievert";
    else
      this.text = "Coraggioso... Hai superato la dose di " + (this.counter / 150000).toFixed(0) + " TAC (" + this.counter +")";
  }

}
