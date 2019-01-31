import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTissuComponent } from './ajout-tissu.component';

describe('AjoutTissuComponent', () => {
  let component: AjoutTissuComponent;
  let fixture: ComponentFixture<AjoutTissuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTissuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTissuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
