import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'API-LAB';
  _data: any;

  constructor(
    private _requestService: RequestService
  ) { }

  ngOnInit() {
    this._data = [];
    this._requestService.getData().subscribe(this.onSuccess.bind(this), this.onError.bind(this));
  }

  onSuccess(data: any) {
    let dataModel = [];
    let children = data.data.children;
    children.forEach(child => {
      let image = child.data.thumbnail;
      let title = child.data.title;
      let link = child.data.url;
      dataModel.push({
        image: image,
        title: title,
        link: link
      })
    })
    console.log(dataModel)
    this._data = dataModel;
  }

  onError(error) {
    alert(error);
  }
}
