import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  //Exemplo de declaração de uma ViewChild
  @ViewChild(CardComponent) card: CardComponent;

  slip: { id: number, advice: string };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    console.log('ngOnInit card: ', this.card);
    this.buscarConselho();
  }

  //Exemplo de interação com o lifecycle hook AfterViewInit
  ngAfterViewInit() {
    console.log('ngAfterViewInit card: ', this.card);
  }

  //Exemplo de chamada de um endpoint GET via http client
  buscarConselho() {
    const url = 'https://api.adviceslip.com/advice';
    this.http.get<{ slip: { id: number, advice: string }}>(url).subscribe(retorno => {
      this.slip = retorno.slip;
    });
  }

  clickCard(event = 'default') {
    switch (event) {
      case 'Produto Detalhe':
        //Exemplo redirecionamento para rota com parametro
        this.router.navigate([
          '/listagem-produto',
          'detalhe-produto',
          'testeIdProduto',
        ]);
        return;

      case 'Entre em contato':
        //Exemplo redirecionamento para rota 'simples'
        this.router.navigate(['/contato']);
        return;

      case 'Sobre nós':
        //Exemplo redirecionamento para rota com query parametro
        this.router.navigate(['/contato'], {
          queryParams: { secao: 'sobre-nos' },
        });
        return;

      default:
        return;
    }
  }
}
