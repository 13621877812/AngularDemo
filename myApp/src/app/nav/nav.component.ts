
/** 子组件模版
 * 
 *  1.接收父组件传入的参数
 *  2.事件回调给父组件
 *  3.子组件直接调用父组件方法（非常强大，通过父组件对象，父组件的属性和方法都可以调用）
 *  4. 父组件通过viewchild也可以获取子组件属性和方法
*/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //接收父组件的传参
  @Input() title:string  //导航标题
  @Input() parent:any    //父组件
  @Input() isBack:boolean  //是否有子组件统一处理导航返回
  @Input() backIsShow:boolean = true;
  @Input() addIsShow:boolean = true;

  
  //回调父组件中的事件
  @Output() private backClick = new EventEmitter<string> ();
  @Output() private addClick = new EventEmitter<string> ();

  //供父组件获取
  param:string = "子组件的属性";

  constructor() { }

  ngOnInit() {

  }
  goBack(): void {
    this.backClick.emit("我是回调的参数");
    //可以通过获取 backClick 的属性来判断父组件是否实现了方法
    if (this.backClick.observers.length == 0) {
      //父组件没有实现子组件方法


    } else {
      //父组件实现子组件的方法 通过length 可以判断当前对象被多少引用(一般为0或1)
      
    }

  }
  add(): void {
    this.addClick.emit("添加的参数");
    console.log(this.addClick);
    console.log(this.backClick);
    console.log(this.parent)

    //可以直接通过父组件对象调用父组件方法和获取父组件属性
    this.parent.childMethod();
  }
  parentMethod(): void {
    alert("父组件调用子组件的方法！")
  }

}
