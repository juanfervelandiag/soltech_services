import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicesService } from '../../services/services';
import { ServiceCard } from '../../components/service-card/service-card';
import { ReplacementImage } from '../../components/replacement-image/replacement-image';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, ServiceCard, ReplacementImage],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css'
})
export class ServiceDetail {
  svc = inject(ServicesService);
  private route = inject(ActivatedRoute);

  private id = toSignal(this.route.paramMap.pipe(map(p => Number(p.get('id')))));

  service = computed(() => this.svc.getServiceById(this.id() ?? 0));

  relatedServices = computed(() => {
    const s = this.service();
    if (!s) return [];
    return this.svc.services()
      .filter(x => x.category === s.category && x.id !== s.id)
      .slice(0, 3);
  });
}
