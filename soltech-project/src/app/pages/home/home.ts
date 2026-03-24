import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButton } from '../../shared/components/custom-button/custom-button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomButton],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private router = inject(Router);

  goToContact(): void {
    this.router.navigate(['/contact']);
  }
  
  onSaveClick(): void { 
    console.log('Se hizo click en el botón de Home')
  }

  onMoreInfoClick(): void { 
    console.log('Clic en Ver más')
  }
}
