import { Component } from '@angular/core';
import { BlogPostListComponent } from '../blog-post-list/blog-post-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogPostListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
