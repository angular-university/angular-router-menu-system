import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {routerConfig} from "../router.config";
import {RouterModule} from "@angular/router";
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { SideMenuComponent } from './categories-menu/categories-menu.component';
import { CoursesCategoryComponent } from './course-category/course-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    CourseCardsComponent,
    SideMenuComponent,
    CoursesCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
