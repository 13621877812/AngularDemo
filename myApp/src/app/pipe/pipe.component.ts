
/**
//管道即过滤器
内置的管道有
 DatePipe
 UpperCasePipe
 LowerCasePipe
 CurrencyPipe
 PercentPipe
 * 
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  //隐藏导航的按钮变量
  backIsShow:boolean = false;
  addIsShow:boolean = false;

  //管道变量
  birthday:Date = new Date();
  gender:boolean = true;
  p:number = 1034.23343333;


  constructor() { }

  ngOnInit() {
  }

}
