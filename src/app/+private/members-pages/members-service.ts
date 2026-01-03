import { Injectable } from '@angular/core';
import { membersItem} from './members-pages';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseService<membersItem> {
  override data: membersItem[] = [
      {id: 1, firstname: 'عسل', lastname: 'مرادی', telephon: 11111},
      {id: 2, firstname: 'تینا', lastname: 'الوندی', telephon: 22222},
      {id: 3, firstname: 'زهرا', lastname: 'نظری', telephon: 33333}
  ];
  override update(destination: membersItem, source: membersItem): void {
    destination.firstname=source.firstname;
    destination.lastname=source.lastname;
    destination.telephon=source.telephon;
  }
}
