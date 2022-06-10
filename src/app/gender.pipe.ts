import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from './user';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: Gender): String {
    if (value === Gender.MALE){
      return "Male"
    }
    else if (value === Gender.FEMALE){
      return "Female"
    }
    else{
      return "Prefer not to say"
    }
  }

}
