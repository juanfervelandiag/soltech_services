import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacementImage } from './replacement-image';

describe('ReplacementImage', () => {
  let component: ReplacementImage;
  let fixture: ComponentFixture<ReplacementImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplacementImage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReplacementImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
