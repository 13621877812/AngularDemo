import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


import { models } from '../datas/mockModel';
import { Model } from '../datas/model';
import { NetServiceService } from '../services/net-service.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

//   public 共有（默认） 可以在类里外使用
// protected 保护类型 只能在当前类和子类中使用
// private 私有类型 只能在当期类使用


  models:Model[] = models; //本地固定数据
  netModels:Model[];    //从网络获取数据
  title:string = "孙见伟";

  
  //子组件对象
  @ViewChild('navBar') navbar;


   //ngModel 双向绑定
   @Input() name:string;
   @Input() addr:string;
   @Input() gender:string = 'true';

   //*ngIf *ngSwitchCase
   num = 5;
   score = 3;


   //其他组件的属性
   h:string = "<h2>这是一个 h2 用[innerHTML]来解析</h2>"
   text:string = "<h2>这是一个 h2 用[innerHTML]来解析</h2>"
   msg:string = "这是title信息"
   divId:string = "divId"
   divclass:string = "backgroundClass"
   public flag=false;
   public attr='red';


  constructor( private router:Router,private httpService:NetServiceService) { }

  ngOnInit() {
    //获取网络数据
    this.httpService.getHttpModels()
    .subscribe(res => {
      this.netModels = res.users;
    }); 
  }

  //子组件调用父组件
  back(param):void {
    console.log("edeee");
    console.log(param);
    alert("子组件回调父组件方法,传入参数为：" + param);
  }
  childMethod(): void {
    alert("子组件通过父组件对象直接调用")
  }


  //删除事件
  delete(id):void {

    //把不需要的数据过滤掉
    this.models = this.models.filter(model => model.id != id);
  }
  //修改数据
  update(id): void {
    const model:Model = this.models.find(model => model.id === id);
    

    //进行导航和取参数
    // this.router.navigateByUrl("/detail/" + id)
    // this.Id = this.route.snapshot.paramMap.get('id');

    //使用比较灵活的传参,适合传入大量的参数
    const routerParams:NavigationExtras = {
      queryParams:{
        id: 100,
        name : '孙见伟',
        gender: true,
        addr: "传入参数"
      }
    };
    this.router.navigate(['/detail/'+id],routerParams);
  }
 

  // 和子组件交互
  getChildMethod(): void {
     this.navbar.parentMethod();
  }
  getChildProperty(): void {
    alert(this.navbar.param)
  }

  //添加数据
  addModel(): void {
    const Id = this.models.length;
    this.models.push({
      id:Id,
      name:this.name,
      addr:this.addr,
      gender: this.gender === 'true'?true:false
    });
    //清空数据
    this.name = '';
    this.addr = '';
    this.gender = 'true';
  }
  changeColor(): void {
    this.flag = !this.flag;
  }


}
