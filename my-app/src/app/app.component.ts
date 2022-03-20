import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  item: any;
  list: Array<any> = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any) => {
      if (data) {
        hideloader();
      }
      this.item = data;
      this.list = this.item.data
      console.log(this.list);
    });

    function hideloader() {
      document.getElementById('loading')!.style.display = 'none';
    }

  }
}
