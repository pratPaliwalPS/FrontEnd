import { Component, OnInit,ViewChild  } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, PageEvent } from "@angular/material";
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../user.model';
import {UserDataSource} from '../usertable/user.datasource';
import { MatSort} from '@angular/material';
@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  dataSource:UserDataSource|null;
 data:any;
 
   length:number;
   pageIndex:number = 1;
   pageSize:number = 10;
   pageSizeOptions:number[] = [5, 10, 25, 50, 100];
  displayedColumns = ['accrualRuleSeqNumber', 'contractingparty', 'contract', 'endUser','status','isdeleted','updatedBy'];
  @ViewChild(MatPaginator) pagination: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService) { }

  
  ngOnInit() {
    this.loadData();
}

loadData() {
  console.log(this.pageSize+"hello page..!");
    this.data = this.userService.getUser(this.pageIndex, this.pageSize);
    this.data.subscribe(data => {
        this.setPagination(data['size'], data['number'], data['totalElements']);
        console.log(data['size']);
        this.dataSource = new UserDataSource(data['content'], this.sort);
        
    });
}

setPagination(pagesize, startIndex,length) {
    this.length = length;
    this.pageIndex = startIndex;
    this.pageSize = pagesize;
   
}

onPaginateChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log(event.pageSize);
    this.loadData();
}

}


