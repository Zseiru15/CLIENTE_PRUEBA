import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-carousel',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.css'
})
export class CardCarouselComponent {

  // @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  currentIndex=0

  sectionTitle = 'Seccion destacada';
  sectionDescription = 'Explora los sitios turisticos de yopal';
  
  selectedInfo:{title:string, description:string} | null = null;

  cards = [
    {
      title: 'Card 1',
      image: 'https://picsum.photos/300/200?random=1',
      action: () => alert('Card 1 selcciona'),
      title_button: 'Boton 1',
      detailTitle: 'Titulo 1',
      detailDescription: 'Texto de descripcion'
    },
    {
      title: 'Card 2',
      image: 'https://picsum.photos/300/200?random=2',
      action: () => alert('Card 2 selcciona'),
      title_button: 'Boton 2',
      detailTitle: 'Titulo 2',
      detailDescription: 'Texto de descripcion'
    },
    {
      title: 'Card 3',
      image: 'https://picsum.photos/300/200?random=3',
      action: () => alert('Card 3 selcciona'),
      title_button: 'Boton 3',
      detailTitle: 'Titulo 3',
      detailDescription: 'Texto de descripcion'
    },
    {
      title: 'Card 4',
      image: 'https://picsum.photos/300/200?random=4',
      action: () => alert('Card 4 selcciona'),
      title_button: 'Boton 4',
      detailTitle: 'Titulo 4',
      detailDescription: 'Texto de descripcion'
    },
    {
      title: 'Card 5',
      image: 'https://picsum.photos/300/200?random=5',
      action: () => alert('Card 5 selcciona'),
      title_button: 'Boton 5',
      detailTitle: 'Titulo 5',
      detailDescription: 'Texto de descripcion'
    },
    {
      title: 'Card 6',
      image: 'https://picsum.photos/300/200?random=6',
      action: () => alert('Card 6 selcciona'),
      title_button: 'Boton 6',
      detailTitle: 'Titulo 6',
      detailDescription: 'Texto de descripcion'
    },
    {
      title: 'Card 7',
      image: 'https://picsum.photos/300/200?random=7',
      action: () => alert('Card 7 selcciona'),
      title_button: 'Boton 7',
      detailTitle: 'Titulo 7',
      detailDescription: 'Texto de descripcion'
    },
    {
      title: 'Card 8',
      image: 'https://picsum.photos/300/200?random=8',
      action: () => alert('Card 8 selcciona'),
      title_button: 'Boton 8',
      detailTitle: 'Titulo 8',
      detailDescription: 'Texto de descripcion'
    }
  ]

  goNext(){
    if(this.currentIndex < this.cards.length-1){
      this.currentIndex++;
    }
  }

  goPrevious(){
    if(this.currentIndex>0){
      this.currentIndex--;
    }
  }

  getTransform(){
    return `translatex(-${this.currentIndex*110}%)`
  }

  mostrarDetalle(card:any){
    this.selectedInfo={
      title: card.detailTitle,
      description: card.detailDescription
    }
  }

  cerrarDetalle(){
    this.selectedInfo=null;
  }

  // ngOnInit(): void {
  //   this.startAutoScroll()
  // }

  // startAutoScroll(): void {
  //   setInterval(() => {
  //     const container = this.scrollContainer.nativeElement;
  //     container.scrollLeft += 320;
  //     if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
  //       container.scrollLeft = 0;
  //     }
  //   }, 25)
  // }
}



// export class CardCarouselComponent implements OnInit {

//   @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

//   sectionTitle = 'Seccion destacada';
//   sectionDescription = 'Explora los sitios turisticos de yopal'

//   cards = [
//     {
//       title: 'Card 1',
//       image: 'https://picsum.photos/300/200?random=1',
//       action: () => alert('Card 1 selcciona')
//     },
//     {
//       title: 'Card 2',
//       image: 'https://picsum.photos/300/200?random=2',
//       action: () => alert('Card 2 selcciona')
//     },
//     {
//       title: 'Card 3',
//       image: 'https://picsum.photos/300/200?random=3',
//       action: () => alert('Card 3 selcciona')
//     },
//     {
//       title: 'Card 4',
//       image: 'https://picsum.photos/300/200?random=4',
//       action: () => alert('Card 4 selcciona')
//     },
//     {
//       title: 'Card 5',
//       image: 'https://picsum.photos/300/200?random=5',
//       action: () => alert('Card 5 selcciona')
//     },
//     {
//       title: 'Card 6',
//       image: 'https://picsum.photos/300/200?random=6',
//       action: () => alert('Card 6 selcciona')
//     },
//     {
//       title: 'Card 7',
//       image: 'https://picsum.photos/300/200?random=7',
//       action: () => alert('Card 7 selcciona')
//     },
//     {
//       title: 'Card 8',
//       image: 'https://picsum.photos/300/200?random=8',
//       action: () => alert('Card 8 selcciona')
//     }
//   ]

//   ngOnInit(): void {
//     this.startAutoScroll()
//   }

//   startAutoScroll(): void {
//     setInterval(() => {
//       const container = this.scrollContainer.nativeElement;
//       container.scrollLeft += 320;
//       if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
//         container.scrollLeft = 0;
//       }
//     }, 25)
//   }
// }