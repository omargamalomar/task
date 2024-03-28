import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-post-item',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './blog-post-item.component.html',
  styleUrl: './blog-post-item.component.css',
})
export class BlogPostItemComponent {
  @Input() post!: any;
}
