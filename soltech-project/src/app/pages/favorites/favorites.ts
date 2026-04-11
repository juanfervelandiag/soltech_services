import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../../services/services';
import { ServiceCard } from '../../components/service-card/service-card';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink, ServiceCard], 
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites {
  public svc = inject(ServicesService);

  favoriteServices = computed(() =>
    this.svc.services().filter(s => this.svc.isFavorite(s.id))
  );
}