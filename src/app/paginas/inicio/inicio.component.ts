import { Component, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  @ViewChild('iconSlider') iconSlider!: ElementRef;

  items = [
    {
      icon: 'bi bi-chat-square-text-fill',
      text: 'Atención rápida y personalizada.',
    },
    {
      icon: 'bi bi-clipboard2-data-fill',
      text: 'Técnicos certificados y responsables.',
    },
    { icon: 'bi bi-android', text: 'Soporte antes, durante y después.' },
    { icon: 'bi bi-cash-coin', text: 'Precios justos sin costos ocultos.' },
    { icon: 'bi bi-calendar2-week', text: '10+ años de experiencia.' },
    { icon: 'bi bi-car-front', text: 'Cobertura en toda la ciudad.' },
  ];

  pauseSlider() {
    this.iconSlider.nativeElement.style.animationPlayState = 'paused';
  }

  resumeSlider() {
    this.iconSlider.nativeElement.style.animationPlayState = 'running';
  }
}
