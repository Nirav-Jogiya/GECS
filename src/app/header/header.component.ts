import { Component, OnInit } from '@angular/core';
import { ScriptService } from "../_services/script.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _script:ScriptService) { }

  ngOnInit(): void {
  }
  ClearHeads(){    
    this._script.clearHeader()
  }
}
