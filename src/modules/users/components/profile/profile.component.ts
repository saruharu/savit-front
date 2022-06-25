import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/modules/auth/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
