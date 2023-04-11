import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CommentComponent } from './comment/comment.component';
import { ProductwithdiscountComponent } from './productwithdiscount/productwithdiscount.component';
import { UserregisterationComponent } from './userregisteration/userregisteration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NotesComponent } from './notes/notes.component';


export const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'home/:name',component:HomeComponent},
  {path:'Product',component:ProductsComponent,
  children:[
    {path:'withdiscount',component:ProductwithdiscountComponent}
    
   ]},
  {path:'users',component:UsersComponent},
  {path:'register',component:UserregisterationComponent},
  {path:'login',component:UserloginComponent},

  {path:'post',component:PostComponent},
  {path:'notes',component:NotesComponent},
  {path:'comment',component:CommentComponent},
  {path:'post/:id',component:CommentComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  // {path:'auth',loadChildren:()=>import("../auth/auth.module").then(m=>m.AuthModule)},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

