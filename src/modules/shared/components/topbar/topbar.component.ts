import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent, SignupDialogComponent } from 'src/modules/auth/components';
import { TokenStorageService } from 'src/modules/auth/services';
import { TopbarLink } from '../../models';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {


  constructor(public dialog: MatDialog, private tokenStorageService: TokenStorageService) {}

  onLoginButton(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSignupButton(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username?: string;

  
  onLogoutButton(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  topbarList :TopbarLink[] = []
  defaultBarList: TopbarLink[] = [
    new TopbarLink('menu', 'Home'), 
    new TopbarLink('about-us','About us'),
    new TopbarLink('contact', 'Contact'), 
    new TopbarLink('faq','FAQ')
  ]
  adminBarList: TopbarLink[] = [new TopbarLink('admin','Dashboard')];
  managerBarList: TopbarLink[] = [
    new TopbarLink('manager', 'Dashboard'), 
    new TopbarLink('orders','Orders')
  ];
  userBarList: TopbarLink[] = [
    new TopbarLink('menu', 'Menu'), 
    new TopbarLink('about-us','About us'),
    new TopbarLink('contact', 'Contact'), 
    new TopbarLink('faq','FAQ')
  ]

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.topbarList = this.setTobarLinks();
      this.username = user.username;
    }
  }

  setTobarLinks(){
    if(this.showAdminBoard) return this.adminBarList;
    if(this.showModeratorBoard) return this.managerBarList;
    if(this.showUserBoard) return this.userBarList;
    return this.defaultBarList;
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
