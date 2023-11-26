import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObreroDetalleComponent } from './obrero-detalle.component';

describe('ObreroDetalleComponent', () => {
  let component: ObreroDetalleComponent;
  let fixture: ComponentFixture<ObreroDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObreroDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObreroDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
