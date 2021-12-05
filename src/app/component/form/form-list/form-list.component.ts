import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  constructor() { }

  data = [
    {
      "hhh": "eee",
      "hello": "o",
      "world": "k",
    },
    {
      "hhh": "eee",
      "hello": "o",
      "world": "k",
    }
  ]
  columnsToDisplay = ["hello", "world"];
  displayedColumns = ["hello", "world"];

  ngOnInit(): void {
  }

}
