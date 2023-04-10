import { Component } from '@angular/core';
import { PostsService } from '../Services/posts.service';
import { IPosts } from '../Shared_Classes_and_Types/IPost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent {
ListPosts:IPosts[]=[];
error:string='';



constructor(private PostsServices:PostsService,private router:Router){}
ngOnInit(): void {

  this.PostsServices.GetPosts().subscribe({
    next:data=>this.ListPosts=data,
    error:error=>this.error=error,
  })
}
OnSeleted(post:any)
{
  this.router.navigate([`/posts/${post.id}/comments`]);
}
}
