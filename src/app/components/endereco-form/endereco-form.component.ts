import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ImportsModule } from '../imports';

@Component({
  selector: 'app-endereco-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './endereco-form.component.html',
  styleUrl: './endereco-form.component.css'
})
export class EnderecoFormComponent {
  formEndereco: FormGroup;

  constructor (private fb: FormBuilder) {
    this.formEndereco = this.fb.group({
      endVal: ['', Validators.required],
      bairroVal: ['', Validators.required],
      numVal: [undefined, Validators.required],
      compVal: [undefined],
      estadoVal: ['', Validators.required],
      cidVal: ['', Validators.required],
      cepVal: ['', [Validators.required, Validators.pattern('\\d{5}\\-\\d{3}')]],
    })
  }

  get endCntrl() {
    return this.formEndereco.controls;
  }

  estado: string[] = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
  ]

}
