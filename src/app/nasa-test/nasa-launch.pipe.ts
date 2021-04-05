import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nasaLaunch'
})
export class NasaLaunchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value > 0) {
      return value + ' seconds to launch...';
    } else if ( value === 0 ){
      return 'Launch!!';
    } else {
      return value;
    }
  }

}
