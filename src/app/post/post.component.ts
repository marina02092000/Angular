import { Component } from '@angular/core';
import { IPost } from '../interface/post';
import {PostservicesService} from '../services/post-services.service'
import { ActivatedRoute, ParamMap, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  PostsList:IPost[]=[]
  errorMessage:any;
  constructor(public postservice:PostservicesService,private router:Router){

  }

  ngOnInit():void {
    this.postservice.GetPosts().subscribe({
      next:data=>this.PostsList=data,
      error:err=>this.errorMessage=err
    })
   
  }

  showcomment(postid:any){
    this.router.navigate(["/post",postid]);
  }
}
