import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  mobileMenuOpen = signal(false);

  navItems: NavItem[] = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Favoritos', path: '/favorites' },
    { name: 'Admin', path: '/admin' },
    { name: 'Contacto', path: '/contact' },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
