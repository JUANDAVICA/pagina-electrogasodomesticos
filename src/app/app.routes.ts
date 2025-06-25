import { Routes } from '@angular/router';
import { TratamientoDatosComponent } from './paginas/politicas/tratamiento-datos/tratamiento-datos.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { PoliticaPrivacidadComponent } from './paginas/politicas/politica-privacidad/politica-privacidad.component';
import { ReembolsosGarantiasComponent } from './paginas/politicas/reembolsos-garantias/reembolsos-garantias.component';

export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'tratamiento-de-datos', component: TratamientoDatosComponent, title: 'Tratamiento de Datos' },
  { path: 'politica-de-privacidad', component: PoliticaPrivacidadComponent, title: 'Política de Privacidad' },
  { path: 'reembolsos-garantias', component: ReembolsosGarantiasComponent, title: 'Garantías y Reembolsos'}
];
