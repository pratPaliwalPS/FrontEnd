import {Observable} from 'rxjs/Rx'
import { UserService } from '../../services/user.service';
import { User } from '../user.model';
import { DataSource } from '@angular/cdk/collections';
import { MatSort} from '@angular/material';
import 'rxjs/add/observable/of';
import { ViewChild  } from '@angular/core';
import { MatPaginator } from "@angular/material";
export class UserDataSource extends DataSource<any> {
    constructor(private users:User[], private _sort: MatSort) {
        super();
    }
    connect(): Observable<User[]> {
        const displayDataChanges = [
            this.users,
            this._sort.sortChange

          ];
        return Observable.merge(...displayDataChanges).map(() => {
            return this.getsortedData(this.users.slice());
          })
    }
   
    getsortedData(data: User[]): User[] {
        if (!this._sort.active || this._sort.direction === '') { return data; }
    
        return data.sort((a, b) => {
          let propertyA: number|string|boolean= '';
          let propertyB: number|string|boolean = '';
    
          switch (this._sort.active) {
            case 'accrualRuleSeqNumber': [propertyA, propertyB] = [a.accrualRuleSeqNumber, b.accrualRuleSeqNumber]; break;
            
            case 'contractingparty': [propertyA, propertyB] = [a.contractingparty, b.contractingparty]; break;
            case 'contract': [propertyA, propertyB] = [a.contract, b.contract]; break;
            case 'endUser': [propertyA, propertyB] = [a.endUser, b.endUser]; break;
            case 'status': [propertyA, propertyB] = [a.status, b.status]; break;
            case 'isdeleted': [propertyA, propertyB] = [a.isdeleted, b.isdeleted]; break;
            case 'updatedBy': [propertyA, propertyB] = [a.updatedBy, b.updatedBy]; break;
          }
    
          const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
          const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
    
          return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
      }
    disconnect() {}
  }