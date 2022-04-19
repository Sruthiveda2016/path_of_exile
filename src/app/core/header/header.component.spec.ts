import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[HeaderComponent-create ] - should create', () => {
    expect(component).toBeTruthy();
  });

  it('[HeaderComponent-create ] - should include the header-text', () => {
    let titleDiv = fixture.debugElement.query(By.css('#header-text')).nativeElement.innerText;
    expect(titleDiv).toBe('Path Of Exile');
  });
});
