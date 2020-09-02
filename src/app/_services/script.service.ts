import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  header = false
  showHeader = JSON.parse(localStorage.getItem("Header"))

  constructor() { }

  showHeaders(){
    this.header = true
    localStorage.setItem("Header",JSON.stringify(this.header))
    this.showHeader = JSON.parse(localStorage.getItem("Header"))
  }
}
