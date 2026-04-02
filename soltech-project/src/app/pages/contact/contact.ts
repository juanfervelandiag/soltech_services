import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  private fb = new FormBuilder();
  private toast = inject(ToastService);
  submitted = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }

  getEmailError(): string {
    const ctrl = this.form.get('email');
    if (ctrl?.errors?.['required']) return 'El correo es requerido';
    if (ctrl?.errors?.['email']) return 'El correo no es válido';
    return '';
  }

  getMessageError(): string {
    const ctrl = this.form.get('message');
    if (ctrl?.errors?.['required']) return 'El mensaje es requerido';
    if (ctrl?.errors?.['minlength']) return 'El mensaje debe tener al menos 10 caracteres';
    return '';
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.toast.success('¡Mensaje enviado! Te responderemos pronto.');
      this.submitted.set(true);
      setTimeout(() => {
        this.form.reset();
        this.submitted.set(false);
      }, 3000);
    } else {
      this.form.markAllAsTouched();
      this.toast.error('Por favor, completa el formulario correctamente.');
    }
  }

  private sanitizer = inject(DomSanitizer);

  contactInfo: { id: string; title: string; value: string; link: string | null }[] = [
    {
      id: 'email',
      title: 'Correo Electrónico',
      value: 'contacto@soltech.com',
      link: 'mailto:contacto@soltech.com'
    },
    {
      id: 'phone',
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      id: 'location',
      title: 'Ubicación',
      value: 'Av. Tecnología 123, Ciudad Digital',
      link: null
    },
    {
      id: 'hours',
      title: 'Horario de Atención',
      value: 'Lun - Vie: 9:00 AM - 6:00 PM',
      link: null
    }
  ];
}
