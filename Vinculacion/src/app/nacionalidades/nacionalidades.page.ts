import { Component, OnInit } from '@angular/core';
import { NacionalidadService } from '../Servicios/nacionalidad.service';
import { INacionalidad } from '../Modelos/Nacionalidad';

@Component({
  selector: 'app-nacionalidades',
  templateUrl: './nacionalidades.page.html',
  styleUrls: ['./nacionalidades.page.scss'],
})
export class NacionalidadesPage implements OnInit {

  constructor(private nacionServices:NacionalidadService) { }
  nacionalidades: INacionalidad[];
  ngOnInit() {
    this.nacionServices.nacionalidades()
    .subscribe(datos => console.log(datos));
  }

  modificar(){
    
  }
}
