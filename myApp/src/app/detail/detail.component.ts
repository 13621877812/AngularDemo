import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../datas/model';
import { models } from '../datas/mockModel';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  model:Model;
  updateModel:Model;
  Id:string;
  title:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    //获取路由传过来的参数
    this.Id = this.route.snapshot.paramMap.get('id');
    //遍历找到和Id相等id的model
     this.updateModel = models.find(model => model.id + '' === this.Id);


     this.route.queryParams.subscribe((data:any) => {
        this.model = data;
     });
     
     //获取路由中直接配置的参数
     this.title = this.route.snapshot.data.title;
    //  或者
    this.route.data.subscribe(res=>{
      this.title = res.title
    })
    console.log("打印")
    console.log(this.route.snapshot.paramMap.params)
    console.log(this.route.snapshot.paramMap.get('id'))




  }

}
