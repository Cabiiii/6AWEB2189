import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  fetchPosts(): Observable<Post[]> {
    if (this.postsSubject.value.length === 0) {
      this.http.get<Post[]>(this.apiUrl)
        .pipe(
          tap(posts => this.postsSubject.next(posts)),
          catchError(err => {
            console.error(err);
            throw err;
          })
        )
        .subscribe();
    }
    return this.posts$;
  }
}
