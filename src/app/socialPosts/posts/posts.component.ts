import { Component, Input } from '@angular/core';


interface Post {
  title: string;
  thought: string;
}

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
@Input() post: Post; 

}
