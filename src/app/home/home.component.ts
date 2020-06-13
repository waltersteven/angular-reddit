import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post.model';
import { AuthService } from '../auth/shared/auth.service';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts$: Array<PostModel> = [];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(posts => this.posts$ = posts);
  }

  ngOnInit(): void {
  }

}
