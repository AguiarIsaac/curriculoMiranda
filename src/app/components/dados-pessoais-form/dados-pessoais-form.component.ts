import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ImportsModule } from '../imports';

@Component({
  selector: 'app-dados-pessoais-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './dados-pessoais-form.component.html',
  styleUrl: './dados-pessoais-form.component.css'
})
export class DadosPessoaisFormComponent {
  @Input() formDadosPessoais!: FormGroup;
  @Input() formDadosCNH!: FormGroup;

  get dPCntrl() {
    return this.formDadosPessoais.controls;
  }

  get dCnhCntrl() {
    return this.formDadosCNH.controls;
  }

  // Lista para o select de estado civil
  estadoCivil = [
    'Casado(a)',
    'Desquitado(a)',
    'Divorciado(a)',
    'Separado(a) judicialmente',
    'Solteiro(a)',
    'Viúvo(a)',
    'Outros'
  ]

  // Listas opções radio buttons
  opSx = [
    { value: 'Feminino', id: 'sx1', divId: 'div-pad' },
    { value: 'Masculino', id: 'sx2' }
  ]

  // Campos CNH
  alterarCatCnh(){
    if(this.dCnhCntrl['pCnhVal'].value === 'S'){
      this.dCnhCntrl['catCnhVal'].enable()
      this.dCnhCntrl['numCnhVal'].enable()
      this.dCnhCntrl['dataCnhVal'].enable()

      this.formDadosCNH.markAsPristine()
      this.formDadosCNH.markAsUntouched()
    } else {
      this.dCnhCntrl['catCnhVal'].disable()
      this.dCnhCntrl['numCnhVal'].disable()
      this.dCnhCntrl['dataCnhVal'].disable()

      this.formDadosCNH.setValue({
        catCnhVal: undefined,
        numCnhVal: undefined,
        dataCnhVal: undefined
      })
    }
  }

  categoriasCnh: string[] = ['A', 'B', 'C', 'D', 'E']

}
