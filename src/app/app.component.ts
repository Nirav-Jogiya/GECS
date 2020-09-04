import { Component } from '@angular/core';
import { ScriptService } from './_services/script.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GECS';
  constructor(public _script:ScriptService){}
  number: number = 90;
}
