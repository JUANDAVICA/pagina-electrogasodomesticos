import { Component } from '@angular/core';
import { MenuComponent } from './paginas/menu/menu.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina-electrogasodomesticos';
}
