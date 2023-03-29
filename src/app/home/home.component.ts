import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  //Exemplo de declaração de uma ViewChild
  @ViewChild(CardComponent) card: CardComponent;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
    console.log('card: ', this.card);
  }

  //Exemplo de interação com o lifecycle hook AfterViewInit
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('card: ', this.card);
    //this.card.clickCard();
  }

  clickCard(event = 'default') {
    console.log(event);
    //window.alert('clickCard');
  }
}
