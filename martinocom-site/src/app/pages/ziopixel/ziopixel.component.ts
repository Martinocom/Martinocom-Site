import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonData } from '../../model/facts';
import { Fact } from '../../model/fact';

@Component({
  selector: 'app-ziopixel',
  templateUrl: './ziopixel.component.html',
  styleUrls: ['./ziopixel.component.scss']
})
export class ZiopixelComponent implements OnInit {

  public isLoading: boolean = true;
  public isEmpty: boolean = false;
  public isError: boolean = false;
  public isAllOk: boolean = false;

  public savedFacts: Fact[];
  public facts: Fact[];

  private url = "../../assets/data/facts.json";


  @ViewChild('pageList') pageList: ElementRef;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((data: JsonData) => {
      this.isLoading = false

      if (data.facts.length == 0) {
        this.isEmpty = true
      } else {
        this.facts = data.facts
        this.savedFacts = this.facts
        this.isAllOk = true
      }
    }, (error: any) => {
      this.isLoading = false
      this.isError = true
    }) 
  }

  onKey(event: any) {
    let val = event.target.value.toLowerCase();

    if (val != undefined && val != "") {
      this.facts = []
      this.isAllOk = false
      this.isLoading = true
      this.isEmpty = false

      this.savedFacts.forEach(fact => {
        
        if (fact.keywords.indexOf(val) >= 0 || fact.text.indexOf(val) >= 0) {
          this.facts.push(fact)
        }

        this.isLoading = false

        if (this.facts.length == 0) {
          this.isEmpty = true
        } else {
          this.isAllOk = true
        }
      })
    } else {
      this.facts = this.savedFacts;
    }
  }

}
