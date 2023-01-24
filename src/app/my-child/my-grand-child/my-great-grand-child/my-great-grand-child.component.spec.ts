import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGreatGrandChildComponent } from './my-great-grand-child.component';

describe('MyGreatGrandChildComponent', () => {
  let component: MyGreatGrandChildComponent;
  let fixture: ComponentFixture<MyGreatGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGreatGrandChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGreatGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
