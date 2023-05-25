import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPageErrorComponent } from './missing-page-error.component';

describe('MissingPageErrorComponent', () => {
  let component: MissingPageErrorComponent;
  let fixture: ComponentFixture<MissingPageErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissingPageErrorComponent]
    });
    fixture = TestBed.createComponent(MissingPageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
