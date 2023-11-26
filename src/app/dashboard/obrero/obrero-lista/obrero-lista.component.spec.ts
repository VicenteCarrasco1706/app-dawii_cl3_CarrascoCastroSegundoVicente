import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObreroListaComponent } from './obrero-lista.component';

describe('ObreroListaComponent', () => {
  let component: ObreroListaComponent;
  let fixture: ComponentFixture<ObreroListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObreroListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObreroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
