import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ResultModel } from '../app.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _data = new BehaviorSubject<Array<ResultModel>>([]);

  @Input()
  set data(value) {
    this._data.next(value);
  };
  get data() {
    return this._data.getValue();
  }

  result: Array<ResultModel>;

  constructor() { }

  ngOnInit() {
    this._data
      .subscribe((res) => {
        this.result = this.data;
      });
  }
}
