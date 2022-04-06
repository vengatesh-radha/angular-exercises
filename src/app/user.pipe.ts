import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serialnumberpipe',
})
export class UserPipe implements PipeTransform {
  public transform(userId: number) {
    let updatedUserId = 'serialnumber:' + userId;
    return updatedUserId;
  }
}
