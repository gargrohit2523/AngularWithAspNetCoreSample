import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showPreloader = true;
  title = 'ABC Pharmacy';

  ngOnInit(){
    this.showPreloader = false;
  }
}
