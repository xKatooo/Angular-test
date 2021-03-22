import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {
  nombre:string;
  edad:number;

  constructor() {
    this.nombre = "Kato UwU";
    this.edad = 17;
  }

  ngOnInit(): void {

  }
  ffuncion(){
    alert("hola mundo");
  }

}
