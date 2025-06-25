import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { ElectrodomesticosComponent } from '../electrodomesticos/electrodomesticos.component';
import { ContactanosComponent } from '../contactanos/contactanos.component';
import { ServiciosEmpresaComponent } from '../servicios-empresa/servicios-empresa.component';
import { PoliticasComponent } from '../politicas/politicas.component';

@Component({
  selector: 'app-pagina-principal',
  standalone:true,
  imports: [ InicioComponent, ElectrodomesticosComponent, ContactanosComponent, ServiciosEmpresaComponent, PoliticasComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
