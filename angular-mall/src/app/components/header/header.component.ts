import { Component, OnInit } from '@angular/core';
import { IHeaderLink } from '../../dto/IHeaderLink';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.actionLink = this.links
      .filter(link => link.url == location.pathname)[0];

  }

  links: IHeaderLink[] = [
    { url: '/product', label: '商城' },
    { url: '/checkout', label: '訂單' },
  ];

  actionLink: IHeaderLink = this.links[0];

  handlerLinkClick(link: IHeaderLink): void {
    this.actionLink = link;
  }
}
