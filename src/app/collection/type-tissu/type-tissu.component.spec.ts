import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTissuComponent } from './type-tissu.component';

describe('TypeTissuComponent', () => {
  let component: TypeTissuComponent;
  let fixture: ComponentFixture<TypeTissuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTissuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTissuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
