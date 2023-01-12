import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maiuscolo'
})
export class MaiuscoloPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
