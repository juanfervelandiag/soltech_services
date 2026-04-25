import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../../services/services';
import { ServiceCard } from '../../components/service-card/service-card';
import { categories } from '../../data/services';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule, ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  svc = inject(ServicesService);
  categories = categories;
  searchQuery = signal('');
  selectedCategory = signal('Todos');

  filteredServices = computed(() => {
    const q = this.searchQuery().toLowerCase();
    return this.svc.services().filter(service => {
      const matchesSearch =
        service.name.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q);
      const matchesCategory =
        this.selectedCategory() === 'Todos' || service.category === this.selectedCategory();
      return matchesSearch && matchesCategory;
    });
  });
}
