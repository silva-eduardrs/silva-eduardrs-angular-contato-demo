import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //Exemplo de parametrização de atributos utlizado para receber dados (Input) e para enviar dados/eventos (Output)
  @Input() tituloCard: string;
  @Input() icone: string;
  @Output() cardSelecionado: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickCard() {
    console.log('clickCard');
    //Exemplo do envio do dado tituloCard através de uma variavel de Output (cardSelecionado) para o componente pai
    this.cardSelecionado.emit(this.tituloCard);
  }
}
