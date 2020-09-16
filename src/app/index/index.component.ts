import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../_services/script.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private _script:ScriptService) {}

  ngOnInit(): void {
  }
  walletConnectInit(){
    this._script.walletConnectInit()
  }
  ShowHeader(){
    this._script.showHeaders()
  }
}
