import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGreetingComponent } from './my-greeting.component';

describe('MyGreetingComponent', () => {
  let component: MyGreetingComponent;
  let fixture: ComponentFixture<MyGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGreetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
