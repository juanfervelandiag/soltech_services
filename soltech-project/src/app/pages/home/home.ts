import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ServicesService } from '../../services/services';
import { ServiceCard } from '../../components/service-card/service-card';
import { ReplacementImage } from '../../components/replacement-image/replacement-image';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ServiceCard, ReplacementImage],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  svc = inject(ServicesService);
  private sanitizer = inject(DomSanitizer);

  featuredServices = computed(() => this.svc.services().slice(0, 3));

  benefits: { icon: SafeHtml; title: string; description: string }[] = [
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`),
      title: 'Rapidez',
      description: 'Entregas ágiles sin comprometer la calidad'
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`),
      title: 'Soporte',
      description: 'Asistencia técnica disponible para ti'
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="12" y1="2" x2="12" y2="9"/><path d="M4.22 10.22a8 8 0 1 0 15.56 0"/></svg>`),
      title: 'Personalización',
      description: 'Soluciones adaptadas a tu negocio'
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`),
      title: 'Innovación',
      description: 'Tecnología de vanguardia'
    }
  ];
}
