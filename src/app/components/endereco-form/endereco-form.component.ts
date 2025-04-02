import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ImportsModule } from '../imports';

interface Estados {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-endereco-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './endereco-form.component.html',
  styleUrl: './endereco-form.component.css'
})
export class EnderecoFormComponent {
  @Input() formEndereco!: FormGroup;

  get endCntrl() {
    return this.formEndereco.controls;
  }

  listaTipoEnd: string[] = [
    "Avenida",
    "Rua",
    "Travessa"
  ]

  estados: Estados[] = [
    { value: 'AC', viewValue: 'Acre' },
    { value: 'AL', viewValue: 'Alagoas' },
    { value: 'AP', viewValue: 'Amapá' },
    { value: 'AM', viewValue: 'Amazonas' },
    { value: 'BA', viewValue: 'Bahia' },
    { value: 'CE', viewValue: 'Ceará' },
    { value: 'DF', viewValue: 'Distrito Federal' },
    { value: 'ES', viewValue: 'Espírito Santo' },
    { value: 'GO', viewValue: 'Goiás' },
    { value: 'MA', viewValue: 'Maranhão' },
    { value: 'MT', viewValue: 'Mato Grosso' },
    { value: 'MS', viewValue: 'Mato Grosso do Sul' },
    { value: 'MG', viewValue: 'Minas Gerais' },
    { value: 'PA', viewValue: 'Pará' },
    { value: 'PB', viewValue: 'Paraíba' },
    { value: 'PR', viewValue: 'Paraná' },
    { value: 'PE', viewValue: 'Pernambuco' },
    { value: 'PI', viewValue: 'Piauí' },
    { value: 'RJ', viewValue: 'Rio de Janeiro' },
    { value: 'RN', viewValue: 'Rio Grande do Norte' },
    { value: 'RS', viewValue: 'Rio Grande do Sul' },
    { value: 'RO', viewValue: 'Rondônia' },
    { value: 'RR', viewValue: 'Roraima' },
    { value: 'SC', viewValue: 'Santa Catarina' },
    { value: 'SP', viewValue: 'São Paulo' },
    { value: 'SE', viewValue: 'Sergipe' },
    { value: 'TO', viewValue: 'Tocantins' }
  ];

}
