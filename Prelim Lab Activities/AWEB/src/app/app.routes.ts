import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Directive } from '@angular/core';
import { Directives } from './directives/directives';
import { DataBinding } from './data-binding/data-binding';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Tailwind } from './tailwind/tailwind';



export const routes: Routes = [
  { path: '', component: Home},
  { path: 'directives', component: Directives },
  { path: 'data-binding', component: DataBinding },
  { path: 'tailwind', component: Tailwind},
  { path: '**', component: Pagenotfound },
];
