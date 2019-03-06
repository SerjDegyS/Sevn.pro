import { Component, OnInit } from '@angular/core';
import { UserService } from '../app/services/user.service';
import { IUser } from './offerings/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  
  user: IUser | null;
  showUserMenu: boolean = false;
  showSidebarMenu: boolean = false;

  constructor(private userService: UserService) {};

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      this.user = data;
      console.log(this.user);
    })
  }

  userToggleMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  sidebarMenuToggle() {
    this.showSidebarMenu = !this.showSidebarMenu;
    console.log(this.showSidebarMenu);
    
  }

}
