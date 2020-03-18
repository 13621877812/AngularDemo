import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailComponent } from './detail/detail.component';
import { NavComponent } from './nav/nav.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { PipeComponent } from './pipe/pipe.component';
import { AnimationComponent } from './animation/animation.component';
import { SexPipePipe } from './pipes/sex-pipe.pipe';

@NgModule({
  //声明模块里有什么东西 只能声明： 组件/指令/管道
  declarations: [
    AppComponent,
    MainComponent,
    ListViewComponent,
    DetailComponent,
    NavComponent,
    TabbarComponent,
    PipeComponent,
    AnimationComponent,
    SexPipePipe
  ],
  //声明该模块所依赖的模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //默认是空的
  providers: [],
  //声明模块主组件
  bootstrap: [MainComponent] //设置模块初始化的组件
})
export class AppModule { }
