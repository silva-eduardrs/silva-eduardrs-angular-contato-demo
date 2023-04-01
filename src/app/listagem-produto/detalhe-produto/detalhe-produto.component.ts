import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css'],
})
export class DetalheProdutoComponent implements OnInit {
  idProduto: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //Exemplo de utilização de snapshot para recuperar o parametro
    this.idProduto = this.route.snapshot.params.idProduto;
    console.log('snapshot idProduto: ', this.idProduto);
  }
}
