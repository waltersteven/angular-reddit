import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from '../post.model';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  @Input() post: PostModel;

  constructor() { }

  ngOnInit(): void {
  }

}
