import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ImportsModule } from '../imports';

@Component({
  selector: 'app-formacao-form',
  imports: [
    ImportsModule
  ],
  templateUrl: './formacao-form.component.html',
  styleUrl: './formacao-form.component.css'
})
export class FormacaoFormComponent {
  @Input() formFormacao!: FormGroup;

  get formacaoCntrl() {
    return this.formFormacao.controls
  }
}
