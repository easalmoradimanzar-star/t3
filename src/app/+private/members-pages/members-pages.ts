import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-pages.html',
  styleUrl: './members-pages.scss',
})
export class membersPage implements OnInit {
  save() {
    if (this.state == 'add') {
      this.membersService.add(this.item);
    }
    else if (this.state == 'edit') {
      this.membersService.edit(this.item);
    }
    else if (this.state == 'remove') {
      this.membersService.remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  state: string = 'list';
  data: membersItem[] = [];
  item: membersItem = {
    firstname: '',
    lastname: '',
  };
  membersService = inject(MembersService)
  dataRefresh() {
    this.data=this.membersService.list();
  }
  add() {
    this.state = 'add';
    this.item = { firstname: '', lastname: '' };
  }
  edit(members: membersItem) {
    this.item = { ...members };
    this.state = 'edit'
  }
  remove(members: membersItem) {
    this.item = { ...members };
    this.state = 'remove'
  }
  cancel() {
    this.state = 'list'
  }
}
export interface membersItem {
  lastname: string;
  firstname: string;
  id?: number;
  telephon?: number;
}