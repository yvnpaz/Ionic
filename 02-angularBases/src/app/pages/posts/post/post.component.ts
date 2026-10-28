import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PostComponent implements OnInit {

  @Input() post: any;
  @Output() eventPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    // console.log(this.post.id);
    this.eventPost.emit(this.post.id)
  }

}
