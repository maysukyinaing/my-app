import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGrandChildComponent } from './my-grand-child.component';

describe('MyGrandChildComponent', () => {
  let component: MyGrandChildComponent;
  let fixture: ComponentFixture<MyGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGrandChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
