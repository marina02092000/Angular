import { Component } from '@angular/core';
import { IComment } from "../interface/comment";
import {CommentservicesService} from '../services/comment-services'
import { ActivatedRoute, ParamMap, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  selectedId:any;

  CommentsListofpost:IComment[]=[]
  errorMessage:any;
  constructor(public commentservice:CommentservicesService,private activatedRoute:ActivatedRoute){

  }

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get("id");
    });
    this.commentservice.GetComment(this.selectedId).subscribe({
      next:data=>this.CommentsListofpost=data,
      error:err=>this.errorMessage=err
    })
  }
}
