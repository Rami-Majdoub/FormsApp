import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-form-submitted',
  templateUrl: './form-submitted.component.html',
  styleUrls: ['./form-submitted.component.css']
})
export class FormSubmittedComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private formService: FormService,
  ) { }
  
  data: any;
  columnsToDisplay: string[] = [];
  displayedColumns: string[] = [];

  private ssGetFormSubmissions: any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    this.ssGetFormSubmissions = this.formService.getFormSubmittions(id).subscribe(
      ({data, columns}) =>{
        this.data = data;
        this.columnsToDisplay = columns;
        this.displayedColumns = columns;
      }
    );
  }

  ngOnDestroy(): void {
    if(this.ssGetFormSubmissions) this.ssGetFormSubmissions.unsubscribe();
  }

}
