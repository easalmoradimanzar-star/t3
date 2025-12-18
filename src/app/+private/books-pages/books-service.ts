import { Injectable } from '@angular/core';
import { BookItem } from './books-pages';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
    private data: BookItem[] = [
      { id: 1, title: 'C++', writer: 'خودم', publisher: 'خودش', price: 8000 },
      { id: 2, title: 'برنامه نویسی', writer: 'خودم', publisher: 'خودش', price: 9000 },
      { id: 3, title: 'پایگاه داده', writer: 'خودت', publisher: 'خودش', price: 10000 },
      { id: 4, title: 'طراحی وب', writer: 'خودشان', publisher: 'خودش', price: 11000 },
      { id: 5, title: 'مدارمنطقی', writer: 'خودمان', publisher: 'خودش', price: 12000 },
    ];
    list(){
      return [...this.data];
    }
    add(item:BookItem){
      this.data.push(item);
    }
    edit(item:BookItem){
      const index=this.data.findIndex(b=>b.id==item.id);
      if(index!=-1){
this.data[index].title=item.title;
this.data[index].writer=item.writer;
this.data[index].publisher=item.publisher;
this.data[index].price=item.price;
      }
    }
     remove(item:BookItem){
this.data=this.data.filter(b=>b.id!=item.id);
    }
}
