import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViewComponent } from './list-view/list-view.component';
import { PipeComponent } from './pipe/pipe.component';
import { AnimationComponent } from './animation/animation.component';

import { DetailComponent } from './detail/detail.component';

//路由表
const routes: Routes = [
  {path:'list',component:ListViewComponent},
  // 重定向路由
  {path:'',redirectTo:'/list',pathMatch:'full'},
  {path:'pipe',component:PipeComponent},
  {path:'animation',component:AnimationComponent,data:{title:'动画'}},

  
  {path:'detail/:id',component:DetailComponent,data:{title:'首页'}}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
