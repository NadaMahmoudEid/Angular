import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../Services/posts.service';
import { IComment } from '../Shared_Classes_and_Types/Icomment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent  {

  postId:any;
  comments:IComment[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _postsService:PostsService){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.postId = params.get('postId');
      this._postsService.GetComment(this.postId).subscribe(comments => {
        this.comments = comments;
      });
  });

}

}
