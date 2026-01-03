import { Injectable } from '@angular/core';
import { BookItem } from './books-pages';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService<BookItem>{
    override data: BookItem[] = [
      { id: 1, title: 'C++', writer: 'خودم', publisher: 'خودش', price: 8000 },
      { id: 2, title: 'برنامه نویسی', writer: 'خودم', publisher: 'خودش', price: 9000 },
      { id: 3, title: 'پایگاه داده', writer: 'خودت', publisher: 'خودش', price: 10000 },
      { id: 4, title: 'طراحی وب', writer: 'خودشان', publisher: 'خودش', price: 11000 },
      { id: 5, title: 'مدارمنطقی', writer: 'خودمان', publisher: 'خودش', price: 12000 },
    ];
    override update(destination: BookItem, source: BookItem): void {
destination.title=source.title;
destination.writer=source.writer;
destination.publisher=source.publisher;
destination.price=source.price;
    }
  }