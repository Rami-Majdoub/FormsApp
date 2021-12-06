import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-form-to-submit',
  templateUrl: './form-to-submit.component.html',
  styleUrls: ['./form-to-submit.component.css']
})
export class FormToSubmitComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private formService: FormService,
    ) { }

  public form: any = {};

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (!id){

    } else {
      this.formService.getFormToSubmit(id).subscribe(
        (data) => {
          this.form = data;
          console.log(data);
        }
      )
    }
  }
  
  // public form: any = {
  //   "_id": "61abec1ffbff4d35f3d7ca8d",
  //   "name": "test",
  //   "fields": [
  //     {
  //       "field_name": "a1",
  //       "field_type": "text",
  //       "_id": "61abec1ffbff4d35f3d7ca8e"
  //     },
  //     {
  //       "field_name": "a2",
  //       "field_type": "text",
  //       "_id": "61abec1ffbff4d35f3d7ca8e"
  //     },
  //     {
  //       "field_name": "a3",
  //       "field_type": "text",
  //       "_id": "61abec1ffbff4d35f3d7ca8e"
  //     },
  //     {
  //       "field_name": "b1",
  //       "field_type": "number",
  //       "_id": "61abec1ffbff4d35f3d7ca8f"
  //     },
  //     {
  //       "field_name": "b2",
  //       "field_type": "number",
  //       "_id": "61abec1ffbff4d35f3d7ca8f"
  //     },
  //     {
  //       "field_name": "b3",
  //       "field_type": "number",
  //       "_id": "61abec1ffbff4d35f3d7ca8f"
  //     },
  //     {
  //       "field_name": "c1",
  //       "field_type": "date",
  //       "_id": "61abec1ffbff4d35f3d7ca8f"
  //     },
  //     {
  //       "field_name": "c2",
  //       "field_type": "date",
  //       "_id": "61abec1ffbff4d35f3d7ca8f"
  //     }
  //   ],
  //   "__v": 0
  // };

  public submit(): void {
    console.log(this.form);
  }

}
