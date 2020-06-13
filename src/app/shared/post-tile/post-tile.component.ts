import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post.model';
import { faComments } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  faComments = faComments;

  posts$: Array<PostModel>;

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(posts => this.posts$ = posts);
  }

  ngOnInit(): void {
  }

}