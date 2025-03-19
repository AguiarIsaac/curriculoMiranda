import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosPessoaisFormComponent } from './components/dados-pessoais-form/dados-pessoais-form.component';
import { EnderecoFormComponent } from './components/endereco-form/endereco-form.component';
import { ContatoFormComponent } from './components/contato-form/contato-form.component';
import { BotoesComponent } from './components/botoes/botoes.component';

import { TabsModule } from 'primeng/tabs';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    DadosPessoaisFormComponent,
    EnderecoFormComponent,
    ContatoFormComponent,
    BotoesComponent,

    TabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Passar tabs
  tabAtualMain: number = 0;

  setTab(index: any) {
    this.tabAtualMain = index;
  }
  

  }
