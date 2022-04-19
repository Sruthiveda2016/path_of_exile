import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, RouterTestingModule ],
      declarations: [ LayoutComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[LayoutComponent-create ] - should create', () => {
    expect(component).toBeTruthy();
  });

  it('[LayoutComponent-create ] - should include the header subview', () => {
    expect(fixture.debugElement.query(By.css('app-header')))
      .toBeTruthy()
  });

  it('[LayoutComponent-create ] - should include the footer subview', () => {
    expect(fixture.debugElement.query(By.css('app-footer')))
      .toBeTruthy()
  });
});
