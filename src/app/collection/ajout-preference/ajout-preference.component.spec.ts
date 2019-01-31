import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPreferenceComponent } from './ajout-preference.component';

describe('AjoutPreferenceComponent', () => {
  let component: AjoutPreferenceComponent;
  let fixture: ComponentFixture<AjoutPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
