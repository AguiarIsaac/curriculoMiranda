import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ImportsModule } from '../imports';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-botoes',
  imports: [
    ImportsModule
  ],
  templateUrl: './botoes.component.html',
  styleUrl: './botoes.component.css'
})
export class BotoesComponent {
  // Input/Output Tabs
  @Input() tabAtual: number = 0
  @Output() tabEvent = new EventEmitter<number>()

  // Input/Output Formulários
  @Input() formPrincipal!: FormGroup;
  @Output() enviarFormPrincipal = new EventEmitter<FormGroup>();

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
    let formDp = this.formPrincipal.get('dadosPessoais')
    let formEnd = this.formPrincipal.get('endereco')
    let formCont = this.formPrincipal.get('contato')
    let formAreaInt = this.formPrincipal.get('areaInteresse')
    let formInfoAd = this.formPrincipal.get('infosAdicionais')
    let formForm = this.formPrincipal.get('formacao')
    let formExPro = this.formPrincipal.get('experienciaProfissional')


    if (this.tabAtual === 0 && formDp?.valid) {
      this.proximaTab()
      console.log('Formulário salvo com sucesso!', formDp.value);
    } else if (this.tabAtual === 1 && formEnd?.valid) {
      this.proximaTab()
      console.log('Formulário salvo com sucesso!', formEnd.value);
    } else if (this.tabAtual === 2 && formCont?.valid) {
      this.proximaTab()
      console.log('Formulário salvo com sucesso!', formCont.value);
    } else if (this.tabAtual === 3 && formAreaInt?.valid) {
      this.proximaTab()
      console.log('Formulário salvo com sucesso!', formAreaInt.value);
    } else if (this.tabAtual === 4 && formInfoAd?.valid) {
      this.proximaTab()
      console.log('Formulário salvo com sucesso!', formInfoAd.value);
    } else if (this.tabAtual === 5 && formForm?.valid) {
      this.proximaTab()
      console.log('Formulário salvo com sucesso!', formForm.value);
    } else if (this.tabAtual === 6 && formExPro?.valid) {
      console.log('Formulário salvo com sucesso!', formExPro.value);

      this.enviarFormPrincipal.emit(this.formPrincipal)

    } else {
      console.log('Algo deu errado...')
    }

  }

  ativarBotao () {
    let formDp = this.formPrincipal.get('dadosPessoais')
    let formEnd = this.formPrincipal.get('endereco')
    let formCont = this.formPrincipal.get('contato')
    let formAreaInt = this.formPrincipal.get('areaInteresse')
    let formInfoAd = this.formPrincipal.get('infosAdicionais')

    if (this.tabAtual === 0 && formDp?.valid) {
      return true
    } else if (this.tabAtual === 1 && formEnd?.valid) {
      return true
    } else if (this.tabAtual === 2 && formCont?.valid) {
      return true
    } else if (this.tabAtual === 3 && formAreaInt?.valid) {
      return true
    } else if (this.tabAtual === 4 && formInfoAd?.valid) {
      return true
    } else if (this.tabAtual >= 5) {
      return true
    } else {
      return false
    }
  }

}
