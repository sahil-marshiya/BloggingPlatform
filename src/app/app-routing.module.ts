import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { DetailedBlogComponent } from './detailed-blog/detailed-blog.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"addpost",component:AddPostComponent},
  {path:'',component:HomeComponent},
  {path:'blogs/:id',component:DetailedBlogComponent},
  {path:'editblog/:id',component:EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
