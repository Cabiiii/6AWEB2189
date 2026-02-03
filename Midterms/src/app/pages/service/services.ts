import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent implements OnInit {
  search$ = new BehaviorSubject<string>('');
  posts$!: Observable<any[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.posts$ = combineLatest([
      this.dataService.fetchPosts(),
      this.search$
    ]).pipe(
      map(([posts, search]) =>
        posts.filter(p =>
          p.title.includes(search) || p.body.includes(search)
        )
      )
    );
  }
}
