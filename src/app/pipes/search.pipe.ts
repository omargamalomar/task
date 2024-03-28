import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from '../posts';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(getPosts: Posts[], term: string): Posts[] {
    if (!term) {
      return getPosts;
    }
    return getPosts.filter((p) =>
      p.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
  }
}
