

import {Routes} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {AboutComponent} from "./app/about/about.component";
import {CoursesComponent} from "./app/courses/courses.component";
import {CourseCardsComponent} from "./app/course-cards/course-cards.component";
import {CategoriesMenuComponent} from "./app/categories-menu/categories-menu.component";


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
                path: '',
                outlet: 'side-menu',
                component: CategoriesMenuComponent
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