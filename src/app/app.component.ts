import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Carculadora', url: '/sumadora', icon: 'calculator' },
    { title: 'Tabla', url: '/tabla', icon: 'grid' },
    { title: 'Traductor', url: 'traductor-number', icon: 'chatbubbles' },
    { title: 'About me ', url: '/about-me', icon: 'play' },
  ];

  constructor() {}
}
