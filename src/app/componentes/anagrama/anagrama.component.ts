import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  nuevoJuego : JuegoAnagrama;
  palabraDesordenada : string;
  palabraIngresada : string;
  mensaje =".";
  
  constructor() 
  {
    this.nuevoJuego = new JuegoAnagrama();
  }

  generarPalabra()
  {
    this.palabraDesordenada = this.nuevoJuego.generarPalabra();
  }

  jugar()
  {
    this.nuevoJuego.jugar(this.palabraIngresada);
    this.mensaje=this.nuevoJuego.verificar();
  }

  ngOnInit() {
  }

}
