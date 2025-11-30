import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';


export const routes: Routes = [
  {path:'', component: Home},
  {path: 'data-binding', component: DataBinding},
  {path: 'directives', component: Directives}
];