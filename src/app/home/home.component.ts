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

  constructor(private router: Router) {}

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
    switch (event) {
      case 'Produto Detalhe':
        this.router.navigate([
          '/listagem-produto',
          'detalhe-produto',
          'testeIdProduto',
        ]);
        return;

      case 'Entre em contato':
        this.router.navigate(['/contato']);
        return;

      case 'Sobre nós':
        this.router.navigate([
          '/contato',
          { queryParam: { secao: 'sobre-nos' } },
        ]);
        return;

      default:
        return;
    }
  }
}
