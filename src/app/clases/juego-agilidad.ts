
import { Juego } from '../clases/juego'

export class JuegoAgilidad extends Juego {

    number1 : number;
    number2 : number;
    numberoIngresao : number;
    resultado : number;
    operator : any;
    cuenta : any;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Agilidad",gano,jugador);
     
            this.number1 = Math.floor((Math.random() * 10) + 1);
            this.number2 = Math.floor((Math.random() * 10) + 1);
            
            this.operator = Math.floor((Math.random() * 4) + 1);
            switch (this.operator) {
                case 1:
                this.cuenta = "+";
                    
                    
                    break;
                case 2:
                this.cuenta = "-";
                    
                 
                    break;
                case 3:
                this.cuenta = "*";
                   
                  
                    break;
                case 4:
                this.cuenta = "/";
                    
                  
                    break;
                default:
                this.cuenta = null;
                    break;
            }
      }
      jugar()
      {
          //this.resultado = this.number1 + this.number2;
        switch (this.operator) {
            case 1:
            this.cuenta = "+";
                this.resultado = this.number1 + this.number2;
                
                break;
            case 2:
            this.cuenta = "-";
                this.resultado = this.number1 - this.number2;
             
                break;
            case 3:
            this.cuenta = "*";
                this.resultado = this.number1 * this.number2;
              
                break;
            case 4:
            this.cuenta = "/";
                this.resultado = this.number1 / this.number2;
              
                break;
            default:
                break;
        }
      }

    public verificar() {
        this.jugar()
        if (this.numberoIngresao == this.resultado) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
}
