import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ImportsModule } from '../imports';

@Component({
  selector: 'app-botoes',
  imports: [
    ImportsModule
  ],
  templateUrl: './botoes.component.html',
  styleUrl: './botoes.component.css'
})
export class BotoesComponent {
  formDPValido: boolean = true;

  // Input/Output Tabs
  @Input() tabAtual: number = 0
  @Output() tabEvent = new EventEmitter<number>()

  // Input/Output Formulários
  @Input() validarForm: boolean = false


  proximaTab() {
    if (this.tabAtual >= 0 && this.tabAtual <= 5) {
      this.tabAtual++
      this.tabEvent.emit(this.tabAtual)
    }
  }

  voltarTab() {
    if (this.tabAtual >= 1 && this.tabAtual <= 6) {
      this.tabAtual--
      this.tabEvent.emit(this.tabAtual)
    }
  }

  enviarFormulario() {
    // if (this.formDPValido && this.tabAtual === 0) {
      this.proximaTab()
    // console.log('Formulário enviado com sucesso!', this.formDadosPessoais);
  }

  ativarBotao () {
    if (this.tabAtual >= 0 && this.formDPValido) {
      return true
    } else {
      return false
    }
  }

}
