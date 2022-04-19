import { TestBed } from '@angular/core/testing';
import { DataFilterPipe } from './data-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DataFilterPipe', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFilterPipe ],
      imports: [ BrowserAnimationsModule ]
    }).compileComponents();
  });

  it('[DataFilterPipe-create ] - create an instance', () => {
    const pipe = new DataFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
