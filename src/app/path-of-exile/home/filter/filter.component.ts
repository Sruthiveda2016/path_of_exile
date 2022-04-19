import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: [ './filter.component.scss' ]
})
export class FilterComponent implements OnInit {

  @Input() filterObj: any;
  @Input() stashDataList: any;
  @Output() filterChange = new EventEmitter();
  public itemSearchString!: string;
  public leagueSearchString!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('filterObj')) {
      this.itemSearchString = JSON.parse(JSON.stringify(this.filterObj.itemName ? this.filterObj.itemName : ''));
      this.leagueSearchString = JSON.parse(JSON.stringify(this.filterObj.league ? this.filterObj.league : ''));
    }
  }

  onItemSearch(searchString: any): void {
    this.itemSearchString = searchString?.target?.value?.trim();
    this.emitFilterChange();
  }

  onLeagueSearch(searchString: any): void {
    this.leagueSearchString = searchString?.target?.value?.trim();
    this.emitFilterChange();
  }

  emitFilterChange(): void {
    this.filterObj.itemName = this.itemSearchString;
    this.filterObj.league = this.leagueSearchString;
    this.filterChange.emit(this.filterObj);
  }
}
