import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public getUsers(){
    return this.http.get<User[]>('http://localhost:4999/users/').pipe(map((users)=>{
      const usersO:User[]=[];
      users.forEach((user)=>{
        usersO.push( new User(user.email, user.id, user.name, user.password, user.type, user.token) );
      });
      return usersO;
    }));
  }

  public getUser(id:number){
    return this.http.get<User>('http://localhost:4999/users/'+id).pipe(
      map(
        (user)=>{
          return new User(user.email, user.id, user.name, user.password, user.type, user.token);
        })
      );
  }

  public updateUser(user:User){
    return this.http.put('http://localhost:4999/users/'+user.id, user);
  }
  public deleteUser(id:number){
    return this.http.delete('http://localhost:4999/users/'+id);
  }
}