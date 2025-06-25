import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-electrodomesticos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './electrodomesticos.component.html',
  styleUrls: ['./electrodomesticos.component.css'],
})
export class ElectrodomesticosComponent {
  Imagenes: string[] = [
    'batidoras-reparacion.jpg',
    'cafeteras-reparacion.jpg',
    'estufas-reparacion.jpg',
    'lavadoras-reparacion.jpg',
    'licuadoras-reparacion.jpg',
    'microondas-reparacion.jpg',
    'nevecones-reparacion.jpg',
    'secadoras-reparacion.jpg',
    'televisores-reparacion.jpg',
  ];

  showMore = false;

  get MostrarImagenes(): string[] {
    return this.showMore ? this.Imagenes : this.Imagenes.slice(0, 6);
  }

  Mostrar() {
    this.showMore = !this.showMore;
  }

  obtenerTexto(nombre: string): string {
    const limpio = nombre.split('-')[0];
    return `Reparación de ${limpio.charAt(0).toUpperCase() + limpio.slice(1)}`;
  }
}
