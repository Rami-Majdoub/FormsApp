import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-to-submit',
  templateUrl: './form-to-submit.component.html',
  styleUrls: ['./form-to-submit.component.css']
})
export class FormToSubmitComponent implements OnInit {

  constructor() { }

  public fields: any[] = [
    {
      name: 'aaaa',
      type: 'text',
      value: '',
    },
    {
      name: 'bbb',
      type: 'number',
      value: '',
    },
    {
      name: 'cc',
      type: 'date',
      value: '',
    },
    {
      name: 'ddddd',
      type: 'button',
      value: '',
    },
  ];
  ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.fields);
  }

}
