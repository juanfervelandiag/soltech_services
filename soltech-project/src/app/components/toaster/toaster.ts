import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'app-toaster',
  standalone: true,
  templateUrl: './toaster.html',
  styleUrl: './toaster.css'
})
export class Toaster {
  ts = inject(ToastService);
}
