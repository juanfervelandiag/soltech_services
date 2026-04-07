import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterLink, ServiceCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  svc = inject(ServicesService);

  favoriteServices = computed(() =>
    this.svc.services().filter(s => this.svc.isFavorite(s.id))
  );
}
