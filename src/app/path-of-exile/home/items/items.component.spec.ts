import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataFilterPipe } from '../../pipes/data-filter.pipe';

import { ItemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ ItemsComponent ],
      providers: [ DataFilterPipe ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('[ItemsComponent-create ] - should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
