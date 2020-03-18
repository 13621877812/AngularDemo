// 这里是从Angular核心模块里面引入了component装饰器
import { Component, OnInit } from '@angular/core';

//用装饰器定义了一个组件以及组件的元数据 所有的组件都必须使用这个装饰器来注解
@Component({
  /**
   *  组件元数据 Angular会通过这里面的属性来渲染组件并执行逻辑
   *  selector 就是css选择器  表示这个组件可以通过app-main来调用，index.html中有个 <app-main></app-main> 标签，这个标签用来展示该组件
   *  templateUrl 组件的模版，定义了组件的布局和内容
   *  styleUrls   该模块引用的css样式
   * 
  */
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
/**
 *  MainComponent 本来就是一个普通的typescript类，但是上面的组件元数据
 *  装饰器告诉Angular，MainComponent是一个组件，需要把一些元数据附加到这个类上
 *  Angular 就会把MainComponent当组件来处理
*/
export class MainComponent implements OnInit {
  // 这个类实际上就是该组件的控制器，我们的业务逻辑就是在这个类中编写
  constructor() { }

  ngOnInit() {
  }

}
