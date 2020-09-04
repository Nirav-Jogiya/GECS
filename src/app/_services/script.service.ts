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

  clearHeader(){
    console.log(JSON.parse(localStorage.getItem("Header")));
    
    this.header = false
    this.showHeader = false
    localStorage.removeItem("Header")
  }
}
