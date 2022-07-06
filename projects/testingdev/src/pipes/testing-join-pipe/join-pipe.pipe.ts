import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join-pipe'
})
export class JoinPipePipe implements PipeTransform {

  transform(value: string[], separator: string =","): any {
    if(!value){
      return ''
    }
    return value.join(separator);
  }

}
