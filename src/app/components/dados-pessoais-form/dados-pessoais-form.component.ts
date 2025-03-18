import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImportsModule } from '../imports';

interface EstadoCivil {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dados-pessoais-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './dados-pessoais-form.component.html',
  styleUrl: './dados-pessoais-form.component.css'
})
export class DadosPessoaisFormComponent {
  formDadosPessoais: FormGroup;

  constructor (private fb: FormBuilder) {
    this.formDadosPessoais = this.fb.group({
      nomeVal: ['', Validators.required],
      dataVal: ['', Validators.required],
      ecVal: ['', Validators.required],
      sxVal: ['F', Validators.required],
      rgVal: ['', [Validators.required, Validators.pattern('\\d{2}\\.\\d{3}\\.\\d{3}-\\d')]],
      cpfVal: ['', [Validators.required, Validators.pattern('\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}')]],
      pCnhVal: ['S', Validators.required],
      catCnhVal: [{value: [], disabled: false}, Validators.required]
    })
  }

  get dPCntrl() {
    return this.formDadosPessoais.controls;
  }


  // Lista para o select de estado civil
  estCiv: EstadoCivil[] = [
    {value: 'S', viewValue: 'Solteiro(a)'},
    {value: 'C', viewValue: 'Casado(a)'},
    {value: 'V', viewValue: 'Viúvo(a)'},
    {value: 'O', viewValue: 'Outro'}
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
      this.desativarCnh = false
      this.dPCntrl['catCnhVal'].enable()
    } else {
      this.desativarCnh = true
      this.dPCntrl['catCnhVal'].disable()
      this.dPCntrl['catCnhVal'].setValue(undefined)
    }
  }

  categoriasCnh: string[] = ['A', 'B', 'C', 'D', 'E']

}
