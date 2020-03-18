import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


/**             Angular中的生命周期函数
 * 
 *  生命周期函数通俗的讲就是组件创建、组件更新、组件销毁的时候会出发的一些列方法。
 *  当Angular 使用构造函数新建一个组件或指令后，就会按下面的顺序在特定时刻调用这些生命周期钩子方法
 *  每个接口都有唯一的一个钩子方法，它们的名字是由接口名再加上ng前缀构成的，譬如OnInit接口的钩子方法叫做ngOnInit
 * 
 * 
 * 指令与组件共有的钩子

     ngOnChanges
     ngOnInit
    ngDoCheck
    ngOnDestroy
  组件特有的钩子

ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked
 * 
 * 
 * 2.生命周期钩子的作用及调用顺序
 * 1、ngOnChanges ---- 当数据绑定输入属性的值发生变化时调用
 * 2、ngOnInit ---- 在第一次 ngOnChanges 后调用
 * 3、ngDoCheck ---- 自定义的方法，用于检测和处理值的改变
 * 4、ngAfterContentInit ---在组件内容初始化之后调用
 * 5、ngAfterContentChecked --- 组件每次检查内容时调用
 * 6、ngAfterViewInit  ----- 组件每次检查视图时调用
 * 7、ngAfterViewChecked  ----- 组件每次检查视图时调用
 * 8、ngOnDestory ---- 指令销毁前调用 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */ 
