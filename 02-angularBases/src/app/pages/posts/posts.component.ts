import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PostsComponent implements OnInit {

  posts!: Observable<any[]>;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {

    this.posts = this._dataService.getPosts();

    // this._dataService.getPosts().subscribe(
    //   (posts: any[]) => {
    //     console.log(posts)
    //     this.posts = posts;
    // });

  }

  takeEventPost(event: number) {
    console.log("Click en: ", event);
  }

}
