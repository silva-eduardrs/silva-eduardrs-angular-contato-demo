import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  secao: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //Exemplo de utilização de query params para recuperar o parametro
    this.route.queryParams.subscribe((params) => {
      console.log('queryParams secao: ', params['secao']);
    });
  }
}
