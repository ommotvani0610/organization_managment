import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorganigationComponent } from './addorganization.component';

describe('AddorganigationComponent', () => {
  let component: AddorganigationComponent;
  let fixture: ComponentFixture<AddorganigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddorganigationComponent]
    });
    fixture = TestBed.createComponent(AddorganigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
