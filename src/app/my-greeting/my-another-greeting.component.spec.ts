import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnotherGreetingComponent } from './my-another-greeting.component';

describe('MyAnotherGreetingComponent', () => {
  let component: MyAnotherGreetingComponent;
  let fixture: ComponentFixture<MyAnotherGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAnotherGreetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAnotherGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
