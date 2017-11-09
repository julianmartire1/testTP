import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from "../../clases/juego-piedra-papel-tijera";

@Component({
  selector: 'app-piedra-papel-tigera',
  templateUrl: './piedra-papel-tigera.component.html',
  styleUrls: ['./piedra-papel-tigera.component.css']
})
export class PiedraPapelTigeraComponent implements OnInit {

  habemus : boolean = true;
  resultado : any;
  visuales : boolean = true;
  mostrar : boolean = false;
  maquina : any;
  user : any;
  juego : JuegoPiedraPapelTijera;
  constructor() { }

  ngOnInit() {
  }
  eleccion(elec : number)
  { 
    this.juego = new JuegoPiedraPapelTijera();
    this.juego.numeroIngresado = elec;
    this.resultado = this.juego.verificar();
    console.log(this.juego);
    switch (elec) {
      case 1:
        this.user ="../assets/imagenes/piedra.jpg";
        break;
        case 2:
        this.user ="../assets/imagenes/papel.jpg";
        break;
        case 3:
        this.user ="../assets/imagenes/tijera.jpg";
        break;
    
      default:
        break;
    }
    switch (this.juego.numeroSecreto) {
      case 1:
        this.maquina ="../assets/imagenes/piedra.jpg";
        break;
        case 2:
        this.maquina ="../assets/imagenes/papel.jpg";
        break;
        case 3:
        this.maquina ="../assets/imagenes/tijera.jpg";
        break;
    
      default:
        break;
    }
    this.habemus = false;
    this.visuales = true;
  }
  public jugar()
  {
    this.juego = null;
    this.habemus = true;
    this.visuales = false;
   
  }

  

}
