import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services';
import { ToastService } from '../../services/toast';
import { Service, categories } from '../../data/services';

type ServiceFormData = Omit<Service, 'id'>;

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Administration {
  svc = inject(ServicesService);
  toast = inject(ToastService);
  private fb = inject(FormBuilder);

  dialogOpen = signal(false);
  editingId = signal<number | null>(null);
  benefits = signal<string[]>(['']);
  technologies = signal<string[]>(['']);

  serviceCategories = categories.filter(c => c !== 'Todos');

  form = this.fb.group({
    name: ['', Validators.required],
    category: ['Desarrollo', Validators.required],
    description: ['', Validators.required],
    fullDescription: ['', Validators.required],
    estimatedTime: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });

  openDialog(service?: Service): void {
    if (service) {
      this.editingId.set(service.id);
      this.form.setValue({
        name: service.name,
        category: service.category,
        description: service.description,
        fullDescription: service.fullDescription,
        estimatedTime: service.estimatedTime,
        imageUrl: service.imageUrl,
      });
      this.benefits.set([...service.benefits]);
      this.technologies.set([...service.technologies]);
    } else {
      this.editingId.set(null);
      this.form.reset({ category: 'Desarrollo' });
      this.benefits.set(['']);
      this.technologies.set(['']);
    }
    this.dialogOpen.set(true);
  }

  closeDialog(): void {
    this.dialogOpen.set(false);
    this.editingId.set(null);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.toast.error('Por favor completa todos los campos obligatorios');
      return;
    }
    const filteredBenefits = this.benefits().filter(b => b.trim() !== '');
    const filteredTech = this.technologies().filter(t => t.trim() !== '');
    if (!filteredBenefits.length || !filteredTech.length) {
      this.toast.error('Agrega al menos un beneficio y una tecnología');
      return;
    }

    const data: ServiceFormData = {
      ...(this.form.value as Omit<Service, 'id' | 'benefits' | 'technologies'>),
      benefits: filteredBenefits,
      technologies: filteredTech,
    };

    if (this.editingId() !== null) {
      this.svc.updateService(this.editingId()!, data);
      this.toast.success('Servicio actualizado correctamente');
    } else {
      this.svc.addService(data);
      this.toast.success('Servicio creado correctamente');
    }
    this.closeDialog();
  }

  deleteService(id: number, name: string): void {
    if (window.confirm(`¿Estás seguro de eliminar el servicio "${name}"?`)) {
      this.svc.deleteService(id);
      this.toast.success('Servicio eliminado correctamente');
    }
  }

  updateArrayField(field: 'benefits' | 'technologies', index: number, value: string): void {
    if (field === 'benefits') {
      this.benefits.update(arr => { const n = [...arr]; n[index] = value; return n; });
    } else {
      this.technologies.update(arr => { const n = [...arr]; n[index] = value; return n; });
    }
  }

  addArrayField(field: 'benefits' | 'technologies'): void {
    if (field === 'benefits') this.benefits.update(arr => [...arr, '']);
    else this.technologies.update(arr => [...arr, '']);
  }

  removeArrayField(field: 'benefits' | 'technologies', index: number): void {
    const update = (arr: string[]) => {
      const n = arr.filter((_, i) => i !== index);
      return n.length ? n : [''];
    };
    if (field === 'benefits') this.benefits.update(update);
    else this.technologies.update(update);
  }
}
