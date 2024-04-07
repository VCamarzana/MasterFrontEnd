import { Component, OnInit } from '@angular/core';
import { PrivateMenuComponent } from '../private-menu/private-menu.component';
import { PublicMenuComponent } from '../public-menu/public-menu.component';
import { NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    PrivateMenuComponent,
    PublicMenuComponent,
    NgIf,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.isLogged();
  }

  isLogged(): boolean {
    return this.auth.isLogged();
  }

  getUsername() {
    return this.auth.getUsername();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
