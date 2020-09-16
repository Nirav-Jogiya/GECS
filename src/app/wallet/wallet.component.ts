import { Component, OnInit } from '@angular/core';
import {ScriptService} from '../_services/script.service'

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  constructor(public _script:ScriptService) { }
  activechain;
  ngOnInit(): void {
  }
  killSession(){
    this._script.killSession()
  }
}
