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

  get dPCntrl() {
    return this.formDadosPessoais.controls;
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
    { viewValue: 'Feminino', value: 'F', id: 'sx1', divId: 'div-pad' },
    { viewValue: 'Masculino', value: 'M', id: 'sx2' }
  ]

  opCnh = [
    { viewValue: 'Sim', value: 'S', id: 'pcnh1', divId: 'div-pad' },
    { viewValue: 'Não', value: 'N', id: 'pcnh2' }
  ];

  // Campos CNH
  desativarCnh = true;

  alterarCatCnh(){
    if(this.dPCntrl['pCnhVal'].value === 'S'){
      this.dPCntrl['catCnhVal'].enable()
    } else {
      this.dPCntrl['catCnhVal'].disable()
      this.dPCntrl['catCnhVal'].setValue(undefined)
    }
  }

  categoriasCnh: string[] = ['A', 'B', 'C', 'D', 'E']

}
