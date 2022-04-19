import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { StashTabsService } from '../services/stash-tabs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  public stashDataTimer: any;
  public filterObj = {
    itemName: '',
    league: ''
  };
  public itemsList: any = [];
  private nextChangeId!: string;
  private timerInterval = 30000;

  constructor(private stashTabsService: StashTabsService) { }

  ngOnInit(): void {
    this.stashTabsService.getIntialdata().subscribe(
      {
        next: (stashData: any) => {
          this.getItemList(stashData[ 0 ]);
          this.setTimer();
        },
        error: (e) => console.error(e)
      });
  }


  setTimer(): void {
    if (this.stashDataTimer) {
      this.stashDataTimer.unsubscribe();
    }
    const timerWait = timer(this.timerInterval, this.timerInterval);
    this.stashDataTimer = timerWait.subscribe(t => {
      this.getNextStash();
    });
  }

  getNextStash() {
    this.stashTabsService.getdata(this.nextChangeId).subscribe(
      {
        next: (stashData: any) => {
          if (stashData && stashData.length) {
            this.getItemList(stashData[ 0 ]);
            if (this.itemsList.length === 0) {
              this.getNextStash();
            }
          } else {
            if (this.stashDataTimer) {
              this.stashDataTimer.unsubscribe();
            }
          }
        },
        error: (e) => console.error(e)
      }
    );
  }

  getItemList(stashDataList: any) {
    this.itemsList = [];
    this.nextChangeId = stashDataList.next_change_id
    stashDataList?.stashes?.forEach((stash: any) => {
      if (stash?.items?.length) {
        stash.items?.forEach((item: any) => {
          this.itemsList.push({
            accountName: stash.accountName,
            league: stash.league,
            stashId: stash.id,
            icon: item.icon,
            name: item.name,
            typeLine: item.typeLine,
            itemId: item.id
          });
        });
      }
    });
  }

  filterChange(filterObj: any): void {
    this.filterObj = { ...filterObj };
  }

}
