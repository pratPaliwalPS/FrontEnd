import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { User } from '../components/user.model';
@Injectable()
export class UserService {
  users:User[];
  private serviceUrl = 'http://localhost:9090/OrderIntakeTool/accrualrule/';
  
  
  constructor(private http: Http) {
  }
  
  getUser(startIndex, pageSize): Observable<any> {
    console.log(pageSize);
    return this.http.get(this.serviceUrl + startIndex + '/' + pageSize)
          .map(this.extractData);
  }

  extractData(result: Response): User[] {
      return result.json();
  }
}
