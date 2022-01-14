import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  poids = '';
  taille = '';
  imc = '';
  tranche = '';
  etat = '';
  pert: any ='';
  color='success';
  constructor() {}

  onCalculIMC() {
    let tranche = 0;
    let result = 0;
    //Calcul de l'IMC et de la perte de poids
    result = parseFloat(this.poids)/(parseFloat(this.taille)*parseFloat(this.taille));
    this.pert = parseFloat(this.poids) - (25 * (parseFloat(this.taille) * parseFloat(this.taille)));
    //Calcul de la tranche = IMC arrondi
    tranche = Math.round((result)*100)/100;
    //Cast de l'imc pour affichage
    this.imc = (Math.round((result)*100)/100).toString();
    //Cast de pert pour affichage
    this.pert= (Math.round(this.pert*100)/100).toString();
    //-------------AFFICHAGE-----------------------------------------
    //---------------------------------------------------------------
    //Test que l'IMC est un nombre
    if(isNaN(Number(this.imc))){
      this.imc = 'en cours de calcul ';
    }
    //----------------------------------------------------------------
    //Test de la tranche d'IMC pour affichage de l'état
    if(tranche<18.5){
      this.etat = 'maigreur';
    } else if (tranche<25){
      this.etat = 'normal';
    } else if (tranche<30){
      this.etat = 'surpoids';
    } else if (tranche<35){
      this.etat = 'obésité modérée';
    }else if (tranche<40) {
      this.etat = 'obésité sévère';
    } else if (tranche<100){
      this.etat = 'obésité morbide';
    } else {
      this.etat = 'Quel suspense...';
    }
  }
  //------------------Fonction getColor() pour changer couleur en fonction de l'état-------------------
  getColor() {
    if(this.etat === 'maigreur'){
      return 'warning';
    }else if(this.etat==='normal'){
      return 'success';
    }else if(this.etat==='surpoids' || this.etat==='obésité modérée' || this.etat==='obésité sévère' || this.etat==='obésité morbide' ){
      return 'danger';
    }
  }
}
