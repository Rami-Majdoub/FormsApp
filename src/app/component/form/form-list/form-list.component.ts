import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit, OnDestroy  {

  constructor(
    private formService: FormService,
  ) { }

  private ssGetFormList: any;

  columnsToDisplay: string[] = ["name", "admin_actions", "user_actions"];
  displayedColumns: string[] = ["name", "admin_actions", "user_actions"];
  dataSource: any;

  private refreshTable(){
    this.ssGetFormList = this.formService.getFormList().subscribe(
      (data) =>{
        this.dataSource = data;
      }
    );
  }

  ngOnInit(): void {
    this.refreshTable();
  }

  onDelete(id: string){
    console.log(id);
    this.formService.deleteForm(id).subscribe(
      () => {
        console.log("ok");
        this.refreshTable();
      },
      () => {
        console.log("error");
      }
    )
  }

  ngOnDestroy(): void {
    if(this.ssGetFormList) this.ssGetFormList = null;
  }

}
