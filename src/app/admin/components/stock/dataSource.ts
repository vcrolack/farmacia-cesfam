import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  name: string;
  id: number;
  quantity: number;
  type: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {id: 1, name: 'Hydrogen', quantity: 40, type: 'comprimidos'},
  {id: 2, name: 'Helium', quantity: 40, type: 'comprimidos'},
  {id: 3, name: 'Lithium', quantity: 40, type: 'comprimidos'},
  {id: 4, name: 'Beryllium', quantity: 40, type: 'comprimidos'},
  {id: 5, name: 'Boron', quantity: 40, type: 'comprimidos'},
  {id: 6, name: 'Carbon', quantity: 40, type: 'comprimidos'},
  {id: 7, name: 'Nitrogen', quantity: 40, type: 'comprimidos'},
  {id: 8, name: 'Oxygen', quantity: 40, type: 'comprimidos'},
  {id: 9, name: 'Fluorine', quantity: 40, type: 'comprimidos'},
  {id: 10, name: 'Neon', quantity: 40, type: 'comprimidos'},
  {id: 11, name: 'Sodium', quantity: 40, type: 'comprimidos'},
  {id: 12, name: 'Magnesium', quantity: 40, type: 'comprimidos'},
  {id: 13, name: 'Aluminum', quantity: 40, type: 'comprimidos'},
  {id: 14, name: 'Silicon', quantity: 40, type: 'comprimidos'},
  {id: 15, name: 'Phosphorus', quantity: 40, type: 'comprimidos'},
  {id: 16, name: 'Sulfur', quantity: 40, type: 'comprimidos'},
  {id: 17, name: 'Chlorine', quantity: 40, type: 'comprimidos'},
  {id: 18, name: 'Argon', quantity: 40, type: 'comprimidos'},
  {id: 19, name: 'Potassium', quantity: 40, type: 'comprimidos'},
  {id: 20, name: 'Calcium', quantity: 40, type: 'comprimidos'},
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]): TableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]): TableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
