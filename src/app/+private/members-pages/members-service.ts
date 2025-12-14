import { Injectable } from '@angular/core';
import { MembersItem } from './members-pages';

@Injectable({
  providedIn: 'root',
})
export class MembersService  {
    private data: MembersItem[] = [
      { id: 1, name: 'عسل مرادی',telephon: 11111 },
      { id: 2, name: 'زهرا نظری ', telephon: 22222 },
      { id: 3, name: ' تینا الوندی',telephon: 33333 },

    ];
    list(){
      return [...this.data];
    }
    add(item:MembersItem){
      this.data.push(item);
    }
}
