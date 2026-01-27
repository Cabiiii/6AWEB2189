import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Httpclient } from './httpclient';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  protected readonly title = signal('http-client-demo');

  httpusers: User[] = [];
  recipes: any[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data: User[]) => {
      this.httpusers = data;
    });

    this.httpClient.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }
}
