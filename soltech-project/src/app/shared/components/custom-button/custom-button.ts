import { Component, computed, input, output } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';


@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css',
})
export class CustomButton {
  text = input('Botón');
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('medium');
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);

  buttonClick = output<void>();

  buttonClasses = computed(() => {
    return `custom-btn ${this.variantClass()} ${this.sizeClass()}`;
  });

  handleClick(): void { 
    if (this.disabled()) { 
      return;
    }

    this.buttonClick.emit();
  }

  private variantClass(): string { 
    switch (this.variant()) {
      case 'secondary':
        return 'btn-secondary';
      case 'danger':
        return 'btn-danger';
      default:
        return 'btn-primary';
    }
  }

  private sizeClass(): string {
    switch (this.size()) {
      case 'small':
        return 'btn-small';
      case 'large':
        return 'btn-large';
      default:
        return 'btn-medium';
    }
  }
}

