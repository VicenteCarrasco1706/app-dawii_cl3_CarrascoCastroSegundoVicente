import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObreroComponent } from './obrero.component';

describe('ObreroComponent', () => {
  let component: ObreroComponent;
  let fixture: ComponentFixture<ObreroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObreroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
