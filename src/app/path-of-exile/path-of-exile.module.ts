import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PathOfExileRoutingModule } from './path-of-exile-routing.module';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './home/filter/filter.component';
import { ItemsComponent } from './home/items/items.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    FilterComponent,
    ItemsComponent,
    DataFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PathOfExileRoutingModule
  ],
  providers: [ DataFilterPipe ]
})
export class PathOfExileModule { }
