import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ImportsModule } from '../imports';

interface Deficiencias {
  value: string,
  viewValue: string
}

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

  listaDeficiencias: Deficiencias[] = [
    {value: "AUD", viewValue: "Deficiência Auditiva"},
    {value: "INT", viewValue: "Deficiência Intelectual"},
    {value: "VIS", viewValue: "Deficiência Visual"},
    {value: "FIS", viewValue: "Deficiência Fisica"},
    {value: "FAL", viewValue: "Deficiência na Fala"},
    {value: "OUT", viewValue: "Outros"}
  ]

  habilitarCheck: boolean = false

  alterarDeficiencias(){
    if(this.infoAdCntrl['pDeficienciaVal'].value === 'S'){
      this.infoAdCntrl['deficienciasVal'].enable()
      this.habilitarCheck = true

      this.infoAdCntrl['deficienciasVal'].markAsPristine()
      this.infoAdCntrl['deficienciasVal'].markAsUntouched()


    } else {
      this.infoAdCntrl['deficienciasVal'].disable()
      this.habilitarCheck = false

      this.infoAdCntrl['deficienciasVal'].setValue(undefined)
      this.infoAdCntrl['nesAjudaVal'].setValue('N')
      this.infoAdCntrl['aparelhoAudVal'].setValue('N')
    }
  }

  checkDeficiencia(){
    let listaD: string[] = this.infoAdCntrl['deficienciasVal'].value

    if(listaD.some(v => v === "OUT")) {
      this.infoAdCntrl['otDeficienciasVal'].enable()
    } else {
      this.infoAdCntrl['otDeficienciasVal'].disable()

      this.infoAdCntrl['otDeficienciasVal'].setValue(undefined)
    }

  }

}
