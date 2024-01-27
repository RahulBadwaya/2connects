import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isSidebarOpen = false
  ngOnInit(): void {
  }
  openSidebar() {
    this.isSidebarOpen = true
  }
  closeSidebar() {
    this.isSidebarOpen = false
  }

}
