import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private recipeUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    const cachedUsers = localStorage.getItem('users');

    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    }

    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(users =>
        localStorage.setItem('users', JSON.stringify(users))
      )
    );
  }

  getRecipes(): Observable<any[]> {
    return this.http
      .get<any>(this.recipeUrl)
      .pipe(
        map(response => response.recipes)
      );
  }
}
