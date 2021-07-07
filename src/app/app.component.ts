import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person: IPerson = {
    name: "",
    surname: ""
  };
  title = 'helloworld';



  submit() {
    console.log(this.person);
  }
}

interface IPerson {
  name: string;
  surname: string;
}