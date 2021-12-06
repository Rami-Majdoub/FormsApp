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
  
  data: any;
  columnsToDisplay: string[] = [];
  displayedColumns: string[] = [];

  private ssGetFormSubmissions: any;

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    if(this.ssGetFormSubmissions) this.ssGetFormSubmissions = null;
  }

}
