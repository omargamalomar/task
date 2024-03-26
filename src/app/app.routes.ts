import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostItemComponent } from './blog-post-item/blog-post-item.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home", pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"blog-item",component:BlogPostItemComponent},
    {path:"blog-list",component:BlogPostListComponent},
];
