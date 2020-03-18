import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of} from 'rxjs'
import { Model } from '../datas/model';

@Injectable({
  providedIn: 'root'
})
export class NetServiceService {
  userUrl = 'https://www.fastmock.site/mock/37666f9c160ab4b9182191952fa5b988/cs/users';
  constructor(private http:HttpClient) { }
  //获取网络数据
  getHttpModels(): Observable<Model[]> {
    //get请求
    return this.http.get<Model[]>(this.userUrl);
  }
}
