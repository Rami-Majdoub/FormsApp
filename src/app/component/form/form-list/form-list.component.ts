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
  private ssDelete: any;

  displayedColumns: string[] = ["name", "admin_actions", "user_actions"];
  dataSource: any;

  private refreshTable(){
    this.ssGetFormList = this.formService.getFormList().subscribe(
      (data) => this.dataSource = data
    );
  }

  ngOnInit(): void {
    this.refreshTable();
  }

  onDelete(id: string){
    this.ssDelete = this.formService.deleteForm(id).subscribe(
      () => {
        console.log(`form with id: ${id} deleted`);
        this.refreshTable();
      },
      (err) => console.log(err)
    )
  }

  ngOnDestroy(): void {
    if(this.ssGetFormList) this.ssGetFormList.unsubscribe();
    if(this.ssDelete) this.ssDelete.unsubscribe();
  }

}
