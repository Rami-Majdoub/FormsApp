import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyForm } from 'src/app/model/myform.model';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  constructor(
    private formService: FormService
  ) {
    this.myForm = {
      fields: [],
      name: "",
    };
  }

  public myForm: MyForm;
  ngOnInit(): void {
    this.onAddField();
  }

  public onAddField(){
    this.myForm.fields.push({
      field_name: "",
      field_type: "text",
    });
  }

  ssPost: any;
  public onSubmit(form: NgForm){
    if(form.invalid) return;
    
    this.ssPost = this.formService.createForm(this.myForm).subscribe(
      (data) => {
        // success
        console.log(data);
      },
      (err) => {
        // error
        console.log(err);
      }
    )
    console.log(this.myForm);
  }

}
