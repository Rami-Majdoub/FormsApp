import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  constructor() { }

  public fields: any[] = [];
  ngOnInit(): void {
    this.onAddField();
  }

  public onAddField(){
    this.fields.push({
      name: 'hello',
      type: 'text'
    });
  }

  public onSubmit(){
    console.log(this.fields);
  }

}
