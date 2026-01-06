import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { PartnerPage } from './partner-page/partner-page';
import { AboutPage } from './about-page/about-page';
import { JoinUsPage } from './join-us-page/join-us-page';

export const routes: Routes = [
  {path: 'main-page', component: MainPage},
  {path: 'partner-page', component: PartnerPage},
  {path: 'about-page', component: AboutPage},
  {path: 'join-us-page', component: JoinUsPage}
];
