import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showUserMenu: boolean = false;
  showSidebarMenu: boolean = false;

  userToggleMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  sidebarMenuToggle() {
    this.showSidebarMenu = !this.showSidebarMenu;
    console.log(this.showSidebarMenu);
    
  }

}
