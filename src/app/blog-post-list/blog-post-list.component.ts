import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { BlogPostItemComponent } from '../blog-post-item/blog-post-item.component';


@Component({
  selector: 'app-blog-post-list',
  standalone: true,
  imports: [HttpClientModule, BlogPostItemComponent],
  templateUrl: './blog-post-list.component.html',
  styleUrl: './blog-post-list.component.css',
})
export class BlogPostListComponent {
  getPosts: any[] = [];
  res:any[] = []
  increment:number = 10
  constructor(private _PostService: PostService) {}
  ngOnInit() {
    this._PostService.getAllPosts().subscribe((res) => {
      this.getPosts = res.slice(0, 10);
      this.res = res
      console.log(this.res)
    });
  }
  getArticals(){
    this.increment +=10
    this.getPosts = this.res.slice(0, this.increment) 
  }
}
