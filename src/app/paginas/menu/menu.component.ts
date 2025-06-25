import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MenuComponent {
  constructor(private router: Router) {}
  irASeccion(id: string) {
    this.router.navigateByUrl('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }
}
