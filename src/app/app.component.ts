import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosPessoaisFormComponent } from './components/dados-pessoais-form/dados-pessoais-form.component';
import { EnderecoFormComponent } from './components/endereco-form/endereco-form.component';
import { ContatoFormComponent } from './components/contato-form/contato-form.component';

import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    DadosPessoaisFormComponent,
    EnderecoFormComponent,
    ContatoFormComponent,

    TabsModule,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  tabAtual: number = 0;

  setTab(index: any) {
    this.tabAtual = index;
  }

  proximaTab() {
    if (this.tabAtual >= 0 && this.tabAtual <= 1) {
      this.tabAtual++;
    }
  }

  voltarTab() {
    if (this.tabAtual >= 1 && this.tabAtual <= 2) {
      this.tabAtual--
    }
  }

  // enviarFormulario() {
  //   if (formDadosPessoais.valid && this.tabAtual === 0) {
  //     this.proximaTab()
  //     console.log('Formulário enviado com sucesso!', this.formDadosPessoais.value);
  //   } else if (this.formEndereco.valid && this.tabAtual === 1) {
  //     this.proximaTab()
  //     console.log('Formulário enviado com sucesso!', this.formEndereco.value);
  //   } else if (this.formContato.valid && this.tabAtual === 2) {
  //     console.log('Formulário enviado com sucesso!', this.formContato.value);
  //   } else {
  //     console.log('Preencha todos os campos corretamente.');
  //   }
  // }

  // ativarBotao () {
  //   if (this.tabAtual === 0 && this.formDadosPessoais.valid) {
  //     return true
  //   } else if (this.tabAtual === 1 && this.formEndereco.valid) {
  //     return true
  //   } else if (this.tabAtual === 2 && this.formContato.valid) {
  //     return true
  //   } else {
  //     return false
  //   }

  }
