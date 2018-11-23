import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalsService} from '../globals.service';

@Component({
  selector: 'app-hangman-game',
  templateUrl: './hangman-game.component.html',
  styleUrls: ['./hangman-game.component.css'],
})

export class HangmanGameComponent implements OnInit  {

  arrayDico = ['legende', 'cheveux', 'veste', 'soie', 'magique', 'etage', 'princesse',
  'mandarine', 'idole', 'fleche', 'miroir', 'flore', 'cercle', 'tentation', 'immortel', 'quinze', 'romantique', 'triomphe', 'ecurie',
  'loups', 'fantastique', 'fleuve', 'rouet', 'creux', 'isole', 'marseillais', 'amande', 'veuve',
  'siecle', 'carcel', 'teint', 'marocain', 'bretonne', 'estival', 'bretagne', 'escalier', 'occidental', 'stade', 'cantine', 'aubade',
  'complice', 'damier', 'jeune', 'baronne', 'merveille', 'faubourg', 'allier', 'atelier', 'serein', 'acier'];
  arrayVide = [];
  arrayMot = [];
  alphabet = [];
  point = this.globals.point;
  message = '';
  disabled = '';
  type = '';
  progress = 0;
  relaunchButton = '';

  reload() {
    this.router.navigate(['/hangman']);
  }

  letterClick(value: string) {

    if (this.arrayMot.includes(value) && !this.arrayVide.includes(value)) {

      const indices = this.arrayMot.map((e, i) => e === value ? i : '').filter(String);
      for (const index of indices) {
        this.arrayVide[index] = this.arrayMot[index];
      }

      if (this.arrayVide.join('') === this.arrayMot.join('')) {

        console.log('C\'est gagné!');
        this.globals.pointCount('+');
        this.progress = 100;
        this.disabled = 'disabled';
        this.relaunchButton = 'ok';

      } else {

          this.type = 'success';
          this.globals.pointCount('+');
          this.progress += Math.round((100 / this.arrayVide.length)  * indices.length);
          this.message = value + this.globals.scoreGain;
          console.log(value + ' est dans ' + this.arrayMot.join(''));
        }

    } else if (this.arrayMot.includes(value) && this.arrayVide.includes(value)) {

        this.type = 'secondary';
        this.globals.pointCount('~');
        this.message = value + this.globals.scoreGain;

      } else {
          this.type = 'danger';
          this.globals.pointCount('-');
          this.message = value + this.globals.scoreGain;
          console.log(value + ' n\'est pas dans ' + this.arrayMot.join(''));
        }

  }

  ngOnInit() {

    const nom: string = (this.arrayDico[Math.floor(Math.random() * this.arrayDico.length)]).toUpperCase();
    console.log(nom);
    for (const i of nom) {
      this.arrayVide.push('_');
      this.arrayMot.push(i);

    }

    for (let i = 65; i <= 90; i++) {
      this.alphabet.push(String.fromCharCode(i));
    }

  }

  constructor(private router: Router, private globals: GlobalsService) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }



}
