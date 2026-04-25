import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Service } from '../../data/services';
import { ReplacementImage } from '../replacement-image/replacement-image';



@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ReplacementImage],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
  @Input({ required: true }) service!: Service;
  @Input() isFavorite = false;
  @Output() toggleFavorite = new EventEmitter<number>();
}
