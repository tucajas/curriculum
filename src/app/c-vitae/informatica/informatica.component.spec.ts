import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticaComponent } from './informatica.component';

describe('InformaticaComponent', () => {
  let component: InformaticaComponent;
  let fixture: ComponentFixture<InformaticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformaticaComponent]
    });
    fixture = TestBed.createComponent(InformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
