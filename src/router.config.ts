

import {Routes} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {AboutComponent} from "./app/about/about.component";
import {CoursesComponent} from "./app/courses/courses.component";
import {CourseCardsComponent} from "./app/course-cards/course-cards.component";
import {SideMenuComponent} from "./app/categories-menu/categories-menu.component";
import {CoursesCategoryComponent} from "./app/course-category/course-category.component";


export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'courses',
        component: CoursesComponent,
        children: [
            {
                path: '',
                component: CourseCardsComponent
            },
            {
              path: ':id',
              component: CoursesCategoryComponent
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: SideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: SideMenuComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];