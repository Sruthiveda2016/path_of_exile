import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataFilterPipe } from '../../pipes/data-filter.pipe';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: [ './items.component.scss' ],

})
export class ItemsComponent implements OnInit {

  @Input() itemsList: any;
  @Input() filterObj: any;

  constructor(public dataFilterPipe: DataFilterPipe) { }

  ngOnInit(): void {

  }

}
