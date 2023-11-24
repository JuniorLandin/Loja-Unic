import { Component } from '@angular/core';

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.component.html',
  styleUrls: ['./guitarras.component.scss']
})

export class GuitarrasComponent {
  guitarras = [
    {
      id: 1,
      nome: 'Guitarra Tagima Tw-55 Telecaster',
      descricao: 'Uma guitarra clássica com um som nítido.',
      preco: 'R$ 1000,00 no pix com desconto de 5% ou R$ 1100,00 em 12x sem juros',
      imagem: './assets/Telecaster.jpg',
    }
  ];

  handleCompra(guitarraNome: string): void {
    alert(`Você adicionou a guitarra ao carrinho: ${guitarraNome}`);
  }
}
