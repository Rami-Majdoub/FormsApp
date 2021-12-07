import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MyForm } from 'src/app/model/myform.model';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private formService: FormService,
  ) { }

  public myForm: MyForm = {
      fields: [],
      name: "",
  };

  private ssGet: any;
  private ssPost: any;
  ngOnInit(): void {
    this.onAddField();
    
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    this.ssGet = this.formService.getFormToSubmit(id).subscribe(
      (data) => this.myForm = data,
      (err) => this._snackBar.open(err.error.message, undefined, {duration: 3000})
    );

  }

  public onAddField(){
    this.myForm.fields.push({
      field_name: "",
      field_type: "text",
    });
  }

  public onRemoveField(index: number){
    if(this.myForm.fields.length > 1){
      this.myForm.fields.splice(index, 1);
    }
  }

  public onSubmit(form: NgForm){
    if(form.invalid) return;

    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      // edit form
      this.ssPost = this.formService.editForm(id, this.myForm).subscribe(
        ({ message }) => this._snackBar.open(message, undefined, {duration: 3000}),
        (err) => this._snackBar.open(err.error.message, undefined, {duration: 3000})
      )
    } else {
      // create new form
      this.ssPost = this.formService.createForm(this.myForm).subscribe(
        ({ message }) =>  this._snackBar.open(message, undefined, {duration: 3000}),
        (err) => this._snackBar.open(err.error.message, undefined, {duration: 3000})
      );
    }

  }

  ngOnDestroy(): void {
    if(this.ssGet) this.ssGet = this.ssGet.unsubscribe();
    if(this.ssPost) this.ssPost = this.ssPost.unsubscribe();
  }
}
