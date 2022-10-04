import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  content: any = [
    {
      header: 'Formación Académica',
      img: 'https://ubiobio.cl/w/img/Escudo-UBB.svg',
      date:'[2019-2022]',
      text1: 'Ingeniería de ejecución en computación e informática',
      text2: 'egresado el primer semestre del 2022'
    },
    {
      header: 'Experiencia laboral',
      img: 'http://ezsolutions.cl/img/inicio/logo.png',
      date:'[2021-2022]',
      text1: 'Técnico en terreno',
      text2: 'encargado de realizar instalaciones de computadores a empresas como Caja Los Andes, Caja 18, reparaciones de impresoras a Registro Civil. Estos servicios se realizan desde Curicó hasta Angol'
    }
  ]
  constructor() {}
  ngOnInit(): void {

  }
}
