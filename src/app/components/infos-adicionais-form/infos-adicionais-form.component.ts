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

  listaPtSal: string[] = [
    "Até 500,00",
    "Entre R$ 500,01 e  R$ 1.000,00",
    "Entre  R$ 1.000,01 e  R$ 1.500,00",
    "Entre  R$ 1.501,00 e  R$ 2.000,00",
    "Entre  R$ 2.001,00 e  R$ 2.500,00",
    "Entre  R$ 2.501,00 e  R$ 3.000,00",
    "Entre  R$ 3.001,00 e  R$ 3.500,00",
    "Entre  R$ 3.501,00 e  R$ 4.000,00",
    "Entre  R$ 4.001,00 e  R$ 4.500,00",
    "Entre  R$ 4.501,00 e  R$ 5.000,00",
    "Entre  R$ 5.001,00 e R$ 99.999.99"
  ]
}
