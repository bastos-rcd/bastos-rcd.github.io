import { Component } from '@angular/core';
import { Page } from '../models/page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  public onPage = Page.HOME
  public page = Page

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.onChangePage()
  }

  onChangePage() {
    setTimeout(() => {
      if (this.route.url.endsWith('/')) {
        this.onPage = Page.HOME
        console.log("Nous sommes dans l'écran de gestion des utilisateurs.");
      } else if (this.route.url.endsWith('/career')) {
        this.onPage = Page.CAREER
      } else if (this.route.url.endsWith('/skills')) {
        this.onPage = Page.SKILLS
      } else if (this.route.url.endsWith('/experiences')) {
        this.onPage = Page.EXPERIENCES
      } else {
        this.route.navigateByUrl('/')
        this.onPage = Page.HOME
      }
    }, 10);
  }
}