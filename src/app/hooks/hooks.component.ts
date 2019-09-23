import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {
  constructor() { }

  // [*Getter_and_Setter]
  _count: number = 0;
  get count(): number{ return this._count; }
  set count( value: number ){ this._count = value; }

  ngOnInit() { }

}
