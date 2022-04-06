import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class User {
  id: number;
  site_admin: boolean;

  constructor(obj){
    this.id=obj.id;
    this.site_admin=obj.site_admin
  }
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(public http: HttpClient) {}

  public getUserData(): Observable<any> {
    return this.http.get('https://api.github.com/users').pipe(map((res:User[])=>{
      console.log(res);
     return res.map((item:any)=>new User(item))
    }));
  }


}
