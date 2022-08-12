import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionEstudianteComponent } from './edicion-estudiante.component';

describe('EdicionEstudianteComponent', () => {
  let component: EdicionEstudianteComponent;
  let fixture: ComponentFixture<EdicionEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
