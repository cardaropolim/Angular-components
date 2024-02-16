import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';  // Import the necessary module(s)

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],  // Import the necessary module(s)
      declarations: [ButtonComponent]  // Declare the component(s) under test
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
