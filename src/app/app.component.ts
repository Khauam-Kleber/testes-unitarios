import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'testes-unitarios';

  // add(a, b) => {a + b};

  add(a: number, b: number){
    return a + b;
  }
}
