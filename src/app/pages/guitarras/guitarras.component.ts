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
      preco: 'R$ 1000,00',
      imagem: './assets/Telecaster.jpg',
    },
    {
      id: 2,
      nome: 'Guitarra Tagima Tw-55 Telecaster',
      descricao: 'Uma guitarra clássica com um som nítido.',
      preco: 'R$ 1000,00',
      imagem: './assets/Telecaster.jpg',
    }
    ,
    {
      id: 2,
      nome: 'Guitarra Tagima Tw-55 Telecaster',
      descricao: 'Uma guitarra clássica com um som nítido.',
      preco: 'R$ 1000,00',
      imagem: './assets/Telecaster.jpg',
    }
  ];

  handleCompra(guitarraNome: string): void {
    alert(`Você adicionou a guitarra ao carrinho: ${guitarraNome}`);
  }
}
