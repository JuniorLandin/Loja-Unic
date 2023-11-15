import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VioloesComponent } from './violoes.component';

describe('VioloesComponent', () => {
  let component: VioloesComponent;
  let fixture: ComponentFixture<VioloesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VioloesComponent]
    });
    fixture = TestBed.createComponent(VioloesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
