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
  Id:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    //获取路由传过来的参数
  //  this.Id = this.route.snapshot.paramMap.get('id');
    
  //   //遍历找到和Id相等id的model
  //   this.model = models.find(model => model.id + '' === this.Id);

    this.route.queryParams.subscribe((data:any) => {
        this.model = data;
    });


  }

}
