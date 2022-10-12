import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  showPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
}
