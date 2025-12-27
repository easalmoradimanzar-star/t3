import { Injectable } from '@angular/core';
import { membersItem} from './members-pages';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private Members: membersItem[] = [
      {id: 1, firstname: 'عسل', lastname: 'مرادی', telephon: 11111},
      {id: 2, firstname: 'تینا', lastname: 'الوندی', telephon: 22222},
      {id: 3, firstname: 'زهرا', lastname: 'نظری', telephon: 33333}
  ];
  list() {
    return [...this.Members];
  }
  add(item: membersItem) {
    this.Members.push(item);
  }
  edit(item: membersItem) {
    const index = this.Members.findIndex(b=>b.id==item.id);
    if (index!=-1) {
      this.Members[index].firstname = item.firstname;
      this.Members[index].lastname = item.lastname;
      this.Members[index].telephon = item.telephon;
    }
  }
  remove(item: membersItem) {
    this.Members = this.Members.filter(b=>b.id!=item.id);
  }
}
