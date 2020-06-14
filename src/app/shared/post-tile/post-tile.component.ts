import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post.model';
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  faComments = faComments;

  posts$: Array<PostModel>;

  constructor(private router: Router, private postService: PostService) {
    this.postService.getAllPosts().subscribe(posts => this.posts$ = posts);
  }

  ngOnInit(): void {
  }

  goToPost(id: Number) {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
