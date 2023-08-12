import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigationComponent } from './organization.component';

describe('OrganigationComponent', () => {
  let component: OrganigationComponent;
  let fixture: ComponentFixture<OrganigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganigationComponent]
    });
    fixture = TestBed.createComponent(OrganigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
