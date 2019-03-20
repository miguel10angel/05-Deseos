import { Component } from '@angular/core';

import { PendientesPage } from '../pendientes/pendientes.component';
import { TerminadosPage } from '../terminados/terminanos.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadosPage;

  constructor() {

  }
}
