import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service'; 
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content?: string | null;

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        console.log(data);
        this.content = data;
      },
      err => {
        this.content = window.sessionStorage.getItem('auth-token');
      }
    );
  }

}