import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  t = 1;
  change = 1;    
  empty1 = -1;
  empty2 = -1;
  empty3 = -1;
  empty4 = -1;
  empty5 = -1;
  empty6 = -1;
  empty7 = -1;
  empty8 = -1;
  empty9 = -1;
  whogoesnow;
  value1="  -  ";
  value2="  -  ";
  value3="  -  ";
  value4="  -  ";
  value5="  -  ";
  value6="  -  ";
  value7="  -  ";
  value8="  -  ";
  value9="  -  ";
  ganador=null;
  constructor() { }



  variables(){
    this.value1="  -  ";
    this.value2="  -  ";
    this.value3="  -  ";
    this.value4="  -  ";
    this.value5="  -  ";
    this.value6="  -  ";
    this.value7="  -  ";
    this.value8="  -  ";
    this.value9="  -  ";
    this.t = 1;
    this.change = 1;    
    this.empty1 = -1;
    this.empty2 = -1;
    this.empty3 = -1;
    this.empty4 = -1;
    this.empty5 = -1;
    this.empty6 = -1;
    this.empty7 = -1;
    this.empty8 = -1;
    this.empty9 = -1;
    this.whogoesnow = "Turno: Jugador Nº 1";
    this.ganador=null;
}
win(){
  if   (this.empty1==this.empty2 && this.empty2==this.empty3 && this.empty3==0 ||
this.empty4==this.empty5 && this.empty5==this.empty6 && this.empty6==0 ||    
        this.empty7==this.empty8 && this.empty8==this.empty9 && this.empty9==0 ||
        this.empty1==this.empty4 && this.empty4==this.empty7 && this.empty7==0 ||
        this.empty2==this.empty5 && this.empty5==this.empty8 && this.empty8==0 ||
        this.empty3==this.empty6 && this.empty6==this.empty9 && this.empty9==0 ||
        this.empty1==this.empty5 && this.empty5==this.empty9 && this.empty9==0 ||
        this.empty3==this.empty5 && this.empty5==this.empty7 && this.empty7==0 ){
        this.ganador="GANO EL JUGADOR 2 !!!";
        
  }
  if   (this.empty1==this.empty2 && this.empty2==this.empty3 && this.empty3==1 ||
this.empty4==this.empty5 && this.empty5==this.empty6 && this.empty6==1 ||    
        this.empty7==this.empty8 && this.empty8==this.empty9 && this.empty9==1 ||
        this.empty1==this.empty4 && this.empty4==this.empty7 && this.empty7==1 ||
        this.empty2==this.empty5 && this.empty5==this.empty8 && this.empty8==1 ||
        this.empty3==this.empty6 && this.empty6==this.empty9 && this.empty9==1 ||
        this.empty1==this.empty5 && this.empty5==this.empty9 && this.empty9==1 ||
        this.empty3==this.empty5 && this.empty5==this.empty7 && this.empty7==1 ){
            this.ganador="GANO EL JUGADOR 1 !!!";
  
  }
  console.log(this.empty1+" | "+this.empty2+" | "+this.empty3+" | "+this.empty4+" | "+this.empty5+" | "+this.empty6+" | "+this.empty7+" | "+this.empty8+" | "+this.empty9)
}
turnchange(t){
  if (this.change == 1)  {
    if (t == 0){
        t = 1;
        this.whogoesnow = "Turno : Jugador Nº " + 1
    }
    else {
        t = 0;
  this.whogoesnow = "Turno : Jugador Nº " + 2
    }
    
  }
  else {
    t = t;
  }
  this.change = 1  
  return (t); 
}
changing(clicked){
  let spot;
  let xo ;
if (clicked == 1){            
   spot = this.empty1 ;}
if (clicked == 2){
   spot = this.empty2 ;}
if (clicked == 3){
   spot = this.empty3 ;}
if (clicked == 4){
   spot = this.empty4 ;}
if (clicked == 5){
   spot = this.empty5 ;}
if (clicked == 6){
   spot = this.empty6 ;}
if (clicked == 7){
   spot = this.empty7 ;}
if (clicked == 8){
   spot = this.empty8 ;}
if (clicked == 9){
   spot = this.empty9 ;}
if (spot == -1){
   if (this.t == 0){
      xo = "  O  " ;	       	          
      spot = 0             
   }
   else {
      xo = "  X  "  ;              
      spot = 1	     
   }                              
   if (clicked == 1){            
      this.empty1 = spot;}
   if (clicked == 2){
      this.empty2 = spot ;}
   if (clicked == 3){
      this.empty3 = spot ;}
   if (clicked == 4){
      this.empty4 = spot ;}
   if (clicked == 5){
      this.empty5 = spot ;}
   if (clicked == 6){
      this.empty6 = spot ;}
   if (clicked == 7){
      this.empty7 = spot ;}
   if (clicked == 8){
      this.empty8 = spot ;}
   if (clicked == 9){
      this.empty9 = spot ;}
} 
else {
   if (spot == 0){
       xo = "  O  ";}
   if (spot == 1){
       xo = "  X  ";}
   this.change = 0
}
return (xo) ;
}
change_b1(form){	
    let clicked = 1;    
    let xo;
    xo=this.changing(clicked) ;     
    this.t = this.turnchange(this.t) ;  
    console.log(form);
    this.value1 = xo;     
    this.win(); 
   return;
}
change_b2(form){	
    let clicked = 2;
    let xo=this.changing(clicked) ;   
    this.value2 = xo;   
    this.t = this.turnchange(this.t) ;        
    this.win();
    return;
}
change_b3(form){	
    let clicked = 3;
    let xo=this.changing(clicked) ;   
    this.value3 = xo;     
    this.t = this.turnchange(this.t) ;        
    this.win();
    return;  
}
change_b4(form){	
    let clicked = 4;
    let xo=this.changing(clicked) ;   
    this.value4 = xo;    
    this.t = this.turnchange(this.t) ;        
    this.win();
    return;
}
change_b5(form){	
    let clicked = 5;
    let xo=this.changing(clicked) ;   
    this.value5 = xo;   
    this.t = this.turnchange(this.t) ;       
    this.win();
    return;
}
change_b6(form){	
    let clicked = 6;
    let xo=this.changing(clicked) ;   
    this.value6 = xo;     
    this.t = this.turnchange(this.t) ;         
    this.win();
    return;
}
change_b7(form){	
    let clicked = 7;
    let xo=this.changing(clicked) ;   
    this.value7 = xo;   
    this.t = this.turnchange(this.t) ;  
    this.win();
    return;
}
change_b8(form){	
    let clicked = 8;
    let xo=this.changing(clicked) ;   
    this.value8 = xo; 
    this.t = this.turnchange(this.t) ;       
    this.win();
    return;
}
change_b9(form){	
    let clicked = 9;
    let xo=this.changing(clicked) ;   
    this.value9 = xo;     
    this.t = this.turnchange(this.t) ;        
    this.win();
    return;
}

  ngOnInit() {
      this.variables();
  }

}
