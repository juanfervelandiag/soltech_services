import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Toaster } from './components/toaster/toaster';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, Footer, Toaster],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'SolTech Services';
  private router = inject(Router);

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
