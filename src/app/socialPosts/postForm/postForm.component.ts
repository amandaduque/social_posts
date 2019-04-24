import { Component, Input } from '@angular/core';



interface Postings {
  title: string;
  thought: string;
}

@Component({
  selector: 'postform',
  templateUrl: './postForm.component.html',
  styleUrls: ['./postForm.component.css']
})
export class PostFormComponent {
  titleInput: string = '';
  thoughtInput: string = '';
@Input() hide: boolean;
@Input() posts: Postings[];


submitPost = () => {
  const newPost = {
    title: this.titleInput,
    thought: this.thoughtInput,
  };
  this.posts.push(newPost);
  this.titleInput = null;
  this.thoughtInput = null;
}

}
