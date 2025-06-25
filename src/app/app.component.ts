import { Component } from '@angular/core';
import { MenuComponent } from './paginas/menu/menu.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pagina-electrogasodomesticos';
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
