import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(dataList: any, filterObj: any): any {
    let filteredData = dataList;
    if (filterObj && (filterObj.itemName || filterObj.league)) {
      filteredData = dataList.filter((data: any) => {
        if (filterObj.itemName && data.name && (data.name.toLowerCase().includes(filterObj.itemName.toLowerCase())) ||
          (filterObj.league && data.league && data?.league?.toLowerCase().includes(filterObj.league?.toLowerCase()))
        ) {
          return data;
        }
      });
    }
    return filteredData;
  }

}
