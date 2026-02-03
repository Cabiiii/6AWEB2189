import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  latestPosts$!: Observable<any[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.latestPosts$ = this.dataService.fetchPosts().pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
