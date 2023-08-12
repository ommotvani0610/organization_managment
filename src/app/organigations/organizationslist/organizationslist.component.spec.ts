import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationslistComponent } from './organizationslist.component';

describe('OrganizationslistComponent', () => {
  let component: OrganizationslistComponent;
  let fixture: ComponentFixture<OrganizationslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationslistComponent]
    });
    fixture = TestBed.createComponent(OrganizationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
