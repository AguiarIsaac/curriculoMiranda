import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ImportsModule } from '../imports';

@Component({
  selector: 'app-infos-adicionais-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './infos-adicionais-form.component.html',
  styleUrl: './infos-adicionais-form.component.css'
})
export class InfosAdicionaisFormComponent {
  @Input() formInfosAdicionais!: FormGroup;

  get infoAdCntrl (){
    return this.formInfosAdicionais.controls;
  }

  listaEscolaridade: string[] = [
    "5º Ano Completo",
    "6º Ao 9º Ano Incompleto",
    "Analfabeto",
    "Até 5º Ano Incompleto",
    "Doutorado Completo",
    "Ensino Médio Completo",
    "Ensino Médio Incompleto",
    "Fundamental Completo",
    "Mestrado Completo",
    "Superior Completo",
    "Superior Incompleto"
  ];
}
