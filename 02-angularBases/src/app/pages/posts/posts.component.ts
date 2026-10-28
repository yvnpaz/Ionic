import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    standalone: false
})
export class PostsComponent implements OnInit {

  posts: Observable<any[]>;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {

    this.posts = this._dataService.getPosts();

    // this._dataService.getPosts().subscribe(
    //   (posts: any[]) => {
    //     console.log(posts)
    //     this.posts = posts;
    // });

  }

  takeEventPost(event) {
    console.log("Click en: ", event);
  }

}
