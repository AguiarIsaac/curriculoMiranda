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
}
