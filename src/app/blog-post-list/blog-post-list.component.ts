import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { BlogPostItemComponent } from '../blog-post-item/blog-post-item.component';
import { Posts } from '../posts';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-post-list',
  standalone: true,
  imports: [HttpClientModule, BlogPostItemComponent, SearchPipe, FormsModule],
  templateUrl: './blog-post-list.component.html',
  styleUrl: './blog-post-list.component.css',
})
export class BlogPostListComponent {
  getPosts: Posts[] = [];
  res: Posts[] = [];
  increment: number = 10;
  term: string = '';
  loading: boolean = false;
  constructor(private _PostService: PostService) {}
  ngOnInit() {
    this.loading = true;
    this._PostService.getAllPosts().subscribe((res) => {
      this.getPosts = res.slice(0, 9);
      this.loading = false;
      this.res = res;
    });
  }
  loadMore() {
    this.increment += 10;
    this.getPosts = this.res.slice(0, this.increment);
  }
}
