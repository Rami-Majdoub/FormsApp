import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-form-to-submit',
  templateUrl: './form-to-submit.component.html',
  styleUrls: ['./form-to-submit.component.css']
})
export class FormToSubmitComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private formService: FormService,
    private _snackBar: MatSnackBar,
  ) { }

  public myForm: any = {};
  private ssGet: any;
  private ssSubmit: any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    this.ssGet = this.formService.getFormToSubmit(id).subscribe(
      (data) => this.myForm = data
    );
  }
  
  public onSubmit(form: NgForm): void {
    if(form.invalid) return;
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    this.ssSubmit = this.formService.submitForm(id, this.myForm).subscribe(
      ({ message }) => this._snackBar.open(message, undefined, {duration: 3000}),
      (err) => this._snackBar.open(err.error.message, undefined, {duration: 3000})
    )
  }

  ngOnDestroy(): void {
    if(this.ssGet) this.ssGet = this.ssGet.unsubscribe();
    if(this.ssSubmit) this.ssSubmit = this.ssSubmit.unsubscribe();
  }

}
