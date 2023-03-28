import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(CardComponent) card: CardComponent;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
    console.log('card: ', this.card);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('card: ', this.card);
    //this.card.clickCard();
  }

  clickCard(event = 'default') {
    console.log(event);
    window.alert('clickCard');
  }
}
