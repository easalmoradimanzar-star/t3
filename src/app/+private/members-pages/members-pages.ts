import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from './members-service';

@Component({
  selector: 'app-members-page',
  imports: [],
  templateUrl: './members-pages.html',
  styleUrl: './members-pages.scss',
})
export class MembersPage implements OnInit {
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MembersItem[] = [];
  membersService = inject(MembersService);
  dataRefresh() {
    this.data = this.membersService.list();
  }
  add() {
    this.membersService.add ({ id: 4, 
      name: 'آزمایش',
       telephon: 11111
       });
    this.dataRefresh();
  }
}
export interface MembersItem {
  id: number;
  name: string;
  telephon: number
}