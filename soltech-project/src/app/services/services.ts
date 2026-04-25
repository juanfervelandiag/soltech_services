import { Injectable, signal, computed } from '@angular/core';
import { services as initialServices, Service } from '../data/services';

const STORAGE_KEY = 'techsolutions_services';
const FAVORITES_KEY = 'techsolutions_favorites';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  private _services = signal<Service[]>(this._loadServices());
  private _favorites = signal<number[]>(this._loadFavorites());

  readonly services = this._services.asReadonly();
  readonly favorites = this._favorites.asReadonly();

  private _loadServices(): Service[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : initialServices;
    } catch {
      return initialServices;
    }
  }

  private _loadFavorites(): number[] {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private _saveServices(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this._services()));
  }

  private _saveFavorites(): void {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(this._favorites()));
  }

  getServiceById(id: number | string): Service | undefined {
    const targetId = Number(id);
    return this._services().find(s => Number(s.id) === targetId);
  }

  addService(service: Omit<Service, 'id'>): void {
    const newId = Math.max(...this._services().map(s => s.id), 0) + 1;
    this._services.update(list => [...list, { ...service, id: newId }]);
    this._saveServices();
  }

  updateService(id: number | string, service: Omit<Service, 'id'>): void {
    const targetId = Number(id);
    this._services.update(list =>
      list.map(s => (Number(s.id) === targetId ? { ...service, id: targetId } : s))
    );
    this._saveServices();
  }

  deleteService(id: number | string): void {
    const targetId = Number(id);
    this._services.update(list => list.filter(s => Number(s.id) !== targetId));
    this._saveServices();
  }

  isFavorite(serviceId: number): boolean {
    return this._favorites().includes(serviceId);
  }

  toggleFavorite(serviceId: number): void {
    this._favorites.update(favs =>
      favs.includes(serviceId)
        ? favs.filter(id => id !== serviceId)
        : [...favs, serviceId]
    );
    this._saveFavorites();
  }
}
