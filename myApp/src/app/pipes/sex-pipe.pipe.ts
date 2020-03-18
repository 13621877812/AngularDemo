import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexPipe'
})
export class SexPipePipe implements PipeTransform {

  transform(value: boolean,param:string): string {
    const sex:String = value?'男':'女' + 'ddd';
    return param + "     " + sex
  }

}
