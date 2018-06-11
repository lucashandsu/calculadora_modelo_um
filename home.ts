import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  calcular (num) {
    var salvo=document.calculadora.visor.value;
    document.calculadora.visor.value=salvo+num;
  }

  limpar () {
    document.calculadora.visor.value='';
  }

  calculando () {
    var resultado=0;
    resultado=document.calculadora.visor.value;
    document.calculadora.visor.value='';
    document.calculadora.visor.value=eval(resultado);
  }

}
