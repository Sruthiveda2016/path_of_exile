import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StashTabsService } from './stash-tabs.service';

describe('StashTabsService', () => {
  let service: StashTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HttpClient ]
    });
    service = TestBed.inject(StashTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
