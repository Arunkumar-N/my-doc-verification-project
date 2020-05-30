import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDocVerificationComponent } from './my-doc-verification.component';

describe('MyDocVerificationComponent', () => {
  let component: MyDocVerificationComponent;
  let fixture: ComponentFixture<MyDocVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDocVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDocVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
