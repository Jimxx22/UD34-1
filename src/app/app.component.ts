import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD34-1';
  name= 'Jaume';
  res=0; //resultat
  n1=0; // num que entra per fer la operaio amb el res
  op = '0'; // operacio que es mostra
  sop=''; //simbol de la op

  //comprovar que no hi ha cap decimal
  panNumero(n: string){
    let b = false;
      for (let i = 0; i < this.op.length; i++) {
        if (this.op.charAt(i)==',') {
          b=true
          console.log('AAA'+b);
        }
      }
      console.log('BBB'+b);
      if (this.op=='0' && n!='.') {
        this.op=n;
      }else if (!b && n=='.') {
        this.op=this.op+',';
      }else if (n!='.') {
        this.op=this.op+n;
      }
  }

  //boto del
  del(){
    this.op=this.op.slice(0,-1);
    if (this.op=="") {
      this.op="0";
      this.res=0;
      this.n1=0;
    }
  }

  //boto C
  limpiar(){
    this.op="0";
    this.res=0;
    this.n1=0;
  }

  operacion(s: string){
   // agafo el numero abans de i el guardo a res
   // mentres el n1 sigui null agafem el res i li afegim el simbol que entri ultim
   // entra el seguen numero
   // agafo el numero de despres el simbol
   // el fico a n1
   // vaig a calcular la op
   // fico el res de la op a la variable res fico n1 a 0
   // la op es comberteix a res mes el simbol entrat de nou
      if (this.res==0) {
        this.res=parseFloat(this.op);
      }else{
        this.takeN1();
        this.igual();
      }
      this.op=this.op+s;
      this.sop=s;
  }

  // Boto per calcular l-igual de la operacio
  igual(){
    switch (this.sop) {
      case '+':
        console.log("Suma");
        if (this.n1==0) {
          this.takeN1();
        }
        this.res=this.res+this.n1;
          break;
      case "-":
        console.log("resta");
        if (this.n1==0) {
          this.takeN1();
        }
        this.res=this.res-this.n1;
          break;
      case "x":
        console.log("Mult");
        if (this.n1==0) {
          this.takeN1();
        }
        this.res=this.res*this.n1;
          break;
      case "/":
        console.log("Div");
        if (this.n1==0) {
          this.takeN1();
        }
        this.res=this.res/this.n1;
      break;
      default:
          break;
    }
    console.log('Res: '+this.res);
    this.n1=0;
    this.op=this.res+"";
  }

  takeN1(){
    let arr = this.op.split(this.sop);
    if (arr[1]==null) {
    }else{
      this.n1=parseFloat(arr[1]);
      console.log('Simbolo: '+this.sop);
    }
  }
}
