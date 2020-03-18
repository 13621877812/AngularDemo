
//关于Angular的详细链接 https://segmentfault.com/a/1190000008237055#item-7 

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) //设置app初始化渲染的模块
  .catch(err => console.error(err));
