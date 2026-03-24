import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButton } from '../../shared/components/custom-button/custom-button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomButton],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  private router = inject(Router)

  goToHome(): void {
    this.router.navigate(['/'])
  }

  onSendClick(): void {
    console.log('Mensaje enviado desde Contact')
  }

  onDeleteClick(): void {
    console.log('Intento de Eliminar')
  }

}
