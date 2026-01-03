import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BadeCrudPage } from '../../+shared/+base/base-crud-page';
import { BaseService } from '../../+shared/+base/base-service';
import { BaseCrudComponent, column } from "../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-pages.html',
  styleUrl: './members-pages.scss',
})
export class membersPage extends BadeCrudPage<membersItem> implements OnInit{
  ngOnInit(): void {
        this.item={
      firstname:'',
      lastname:'',
      telephon:0,
    }
   this.dataRefresh();
  }
  override dataService=inject(MembersService);
  override addPrepair(): void {
    this.item={
      firstname:'',
      lastname:'',
      telephon:0,
    }
  }
  membersColumns:column[]=[
    {field:'id',title:'شناسه'},
     {field:'firstname',title:'نام'},
      {field:'lastname',title:'نام خانوادگی'},
       {field:'telephon',title:'موبایل'},
  ]
  
}
export interface membersItem extends Thing {
  firstname: string;
  lastname: string;
  telephon?: number;
}