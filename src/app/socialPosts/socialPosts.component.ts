import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'socialPosts',
  templateUrl: './socialPosts.component.html',
  styleUrls: ['./socialPosts.component.css']
})
export class SocialPostsComponent {
  title = 'My Thoughts';
  isHidden: boolean = true;
  posts = [
    {title: 'Lorem Ipsum 1',
     thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
     {title: 'Lorem Ipsum 2',
     thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
     {title: 'Lorem Ipsum 3',
     thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}

  ];

  
 

  @Output() show = new EventEmitter<boolean>();

  toggleForm = () => {
    this.isHidden = !this.isHidden;
    this.show.emit(true);
  };

  onShow = event => {
    console.log(event);
  }

}
