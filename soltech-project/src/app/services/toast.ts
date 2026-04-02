import { Injectable, signal } from '@angular/core';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  id: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _toasts = signal<Toast[]>([]);
  readonly toasts = this._toasts.asReadonly();
  private _counter = 0;

  success(message: string) {
    this._add(message, 'success');
  }

  error(message: string) {
    this._add(message, 'error');
  }

  info(message: string) {
    this._add(message, 'info');
  }

  private _add(message: string, type: 'success' | 'error' | 'info') {
    const id = this._counter++;
    this._toasts.update(t => [...t, { message, type, id }]);
    setTimeout(() => this.remove(id), 3000);
  }

  remove(id: number) {
    this._toasts.update(t => t.filter(toast => toast.id !== id));
  }
}
