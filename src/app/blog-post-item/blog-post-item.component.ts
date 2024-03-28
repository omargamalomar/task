import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-blog-post-item',
  standalone: true,
  imports: [],
  templateUrl: './blog-post-item.component.html',
  styleUrl: './blog-post-item.component.css'
})
export class BlogPostItemComponent {
  @Input() post!:any
}
